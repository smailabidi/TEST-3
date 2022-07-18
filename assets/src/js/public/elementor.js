( function( $, elementor ) {
	'use strict';

	var Qoxag = {
		init: function() {
			var widgets = {
				'back-to-top.default': Qoxag.BackToTop,
				'post-slider.default': Qoxag.PostSlider,
				'main-slider.default': Qoxag.MainSlider,
				'news-ticker.default': Qoxag.NewsTicker,
				'post-videotab.default': Qoxag.VideoPopup,
				'post-loadmore.default': Qoxag.Qoxag_Loadmore,
				'post-masonary.default': Qoxag.Qoxag_GallerySlider,
				'products-slider.default': Qoxag.Product_Slider,
				'audio-slider.default': Qoxag.Qoxag_AudioSlider,
				'post-grid.default': Qoxag.Qoxag_GallerySlider,
			};
			$.each( widgets, function( widget, callback ) {
				elementor.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			} );
		},
		BackToTop: function( $scope ) {
			let $el = $scope.find( '.qoxag-back-top' );

			if ( $el.length > 0 ) {
				$( window ).on( 'scroll', function() {
					var scrolltop = $( window ).scrollTop(),
						docHeight = $( document ).height() / 2;

					if ( scrolltop > docHeight ) {
						$( $el ).fadeIn( 'slow' );
					} else {
						$( $el ).fadeOut( 'slow' );
					}
				} );
				$( $el ).click( function() {
					$( 'html, body' ).animate( { scrollTop: 0 }, 800 );
				} );
			}
		},

		// PostSlider
		PostSlider: function( $scope ) {
			let $container = $scope.find( '.qoxag-post-slider' );
			let controls = $container.data( 'controls' );

			let slides_to_show = controls.slides_to_show;
			let slide_loop = Boolean( controls.slide_loop );
			let slide_autoplay = Boolean( controls.slide_autoplay );
			let slide_autoplay_delay = parseInt( controls.slide_autoplay_delay );
			let slider_space_between = parseInt( controls.slider_space_between );
			let slides_per_group = controls.slides_per_group;
			let widget_id = controls.widget_id;

			if ( $container.length > 0 ) {
				// eslint-disable-next-line
				$($container).each(function (index, element) {
					let $element = $( element ).find( '.swiper-container' );
					new Swiper( $element, {
						slidesPerView: parseInt( slides_to_show.desktop ),
						centeredSlides: false,
						spaceBetween: slider_space_between,
						loop: slide_loop,
						slidesPerGroup: slides_per_group.desktop,
						wrapperClass: 'swiper-wrapper',
						slideClass: 'swiper-slide',
						grabCursor: false,
						allowTouchMove: true,
						speed: 1200, //slider transition speed
						parallax: true,
						autoplay: slide_autoplay ? { delay: slide_autoplay_delay } : false,
						effect: 'slide',
						mousewheelControl: 1,
						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							dynamicBullets: true,
							clickable: true,
						},
						navigation: {
							nextEl: `.swiper-next-${widget_id}`,
							prevEl: `.swiper-prev-${widget_id}`,
						},
						breakpoints: {
							0: {
								slidesPerView: parseInt( slides_to_show.mobile ),
								slidesPerGroup: parseInt( slides_per_group.mobile ),
							},
							767: {
								slidesPerView: parseInt( slides_to_show.tablet ),
								slidesPerGroup: parseInt( slides_per_group.tablet ),
							},
							1024: {
								slidesPerView: parseInt( slides_to_show.desktop ),
								slidesPerGroup: parseInt( slides_per_group.desktop ),
							},
						},
					} );
				} );
			}
		},

		// MainSlider
		MainSlider: function( $scope ) {
			let $container = $scope.find( '.qoxag-main-slider' );
			let controls = $container.data( 'controls' );

			let slides_to_show = controls.slides_to_show;
			let slide_loop = Boolean( controls.slide_loop );
			// let slide_autoplay = Boolean( controls.slide_autoplay );
			// let slide_autoplay_delay = parseInt( controls.slide_autoplay_delay );
			let slider_space_between = parseInt( controls.slider_space_between );

			if ( $container.length > 0 ) {
				// eslint-disable-next-line
				var galleryTop = new Swiper(".qoxag-main-slider-container", {
					loop: slide_loop,
					loopedSlides: 5, //looped slides should be the same
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					thumbs: {
						swiper: new Swiper( '.qoxag-thumb-slider-container', {
							spaceBetween: slider_space_between,
							slidesPerView: slides_to_show.desktop,
							loop: slide_loop,
							freeMode: true,
							loopedSlides: 5, //looped slides should be the same
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
							breakpoints: {
								0: {
									slidesPerView: parseInt( slides_to_show.mobile ),
								},
								767: {
									slidesPerView: parseInt( slides_to_show.tablet ),
								},
								1024: {
									slidesPerView: parseInt( slides_to_show.desktop ),
								},
							},
						} ),
					},
				} );

				$( '.xts-play_icon' ).magnificPopup( {
					type: 'iframe',
					mainClass: 'mfp-with-zoom',
					zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function

						opener: function( openerElement ) {
							return openerElement.is( 'img' ) ? openerElement : openerElement.find( 'img' );
						},
					},
				} );
			}
		},
		VideoPopup: function( $scope ) {
			let $container = $scope.find( '.xts-play_icon' );
			if ( $container.length > 0 ) {
				$( '.xts-play_icon' ).magnificPopup( {
					type: 'iframe',
					mainClass: 'mfp-with-zoom',
					zoom: {
						enabled: true, // By default it's false, so don't forget to enable it

						duration: 300, // duration of the effect, in milliseconds
						easing: 'ease-in-out', // CSS transition easing function

						opener: function( openerElement ) {
							return openerElement.is( 'img' ) ? openerElement : openerElement.find( 'img' );
						},
					},
				} );
			}
		},

		/* ----------------------------------------------------------- */
		/*  news ticker
      	/* ----------------------------------------------------------- */
		NewsTicker: function( $scope ) {
			let $container = $scope.find( '.trending-slide .slider-container .swiper-container ' );

			if ( $container.length > 0 ) {
				// eslint-disable-next-line
				new Swiper($container, {
					slidesPerView: 1,
					centeredSlides: false,
					loop: true,
					wrapperClass: 'swiper-wrapper',
					slideClass: 'swiper-slide',
					grabCursor: false,
					allowTouchMove: true,
					speed: 1500, //slider transition speed
					parallax: true,
					autoplay: true ? { delay: 4000 } : false, //delay between two slides
					effect: 'slide',
					mousewheelControl: 1,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				} );
			}
		},

		/* ----------------------------------------------------------- */
		/*   Post grid ajax load
		/* ----------------------------------------------------------- */

		Qoxag_Loadmore: function( $scope ) {
			var $container = $scope.find( '.post-grid-loadmore' );
			if ( $container.length > 0 ) {
				$container.on( 'click', function( event ) {
					event.preventDefault();

					var $that = $( this );
					var ajaxjsondata = $that.data( 'json_grid_meta' );
					var qoxag_json_data = Object( ajaxjsondata );

					var contentwrap = $scope.find( '.grid-loadmore-content' ), // item contentwrap
						postperpage = parseInt( qoxag_json_data.query_posts_per_page ), // post per page number
						showallposts = parseInt( qoxag_json_data.total_post ); // total posts count

					var items = contentwrap.find( '.grid-item' ),
						totalpostnumber = parseInt( items.length ),
						paged = parseInt( totalpostnumber / postperpage ) + 1; // paged number

					$.ajax( {
						// eslint-disable-next-line
						url: qoxag_ajax.ajax_url,
						type: 'POST',
						data: { action: 'qoxag_post_ajax_loading', ajax_json_data: ajaxjsondata, paged: paged },
						beforeSend: function() {
							$( '<i class="fa fa-spinner fa-spin" style="margin-left:10px"></i>' ).appendTo( '#post-grid-loadmore' ).fadeIn( 100 );
						},
						complete: function() {
							$scope.find( '.post-grid-loadmore .fa-spinner ' ).remove();
						},
					} )

						.done( function( data ) {
							var $pstitems = $( data );
							$scope.find( '.grid-loadmore-content' ).append( $pstitems );
							var newLenght = contentwrap.find( '.grid-item' ).length;

							if ( showallposts <= newLenght ) {
								$scope.find( '.post-grid-loadmore' ).fadeOut( 300, function() {
									$scope.find( '.post-grid-loadmore' ).remove();
								} );
							}
						} )

						.fail( function() {
							$scope.find( '.post-grid-loadmore' ).remove();
						} );
				} );
			}
		},

		// Product Slider
		Product_Slider: function( $scope ) {
			let $container = $scope.find( '.products-slider' );
			let controls = $container.data( 'controls' );

			let slides_to_show = controls.post_count;
			let slide_autoplay = Boolean( controls.auto_play );
			let slide_autoplay_delay = 2500;

			if ( $container.length > 0 ) {
				// eslint-disable-next-line
					$($container).each(function (index, element) {
					let $element = $( element ).find( '.swiper-container' );
					new Swiper( $element, {
						slidesPerView: slides_to_show,
						centeredSlides: false,
						spaceBetween: 30,
						loop: true,
						slidesPerGroup: 1,
						wrapperClass: 'swiper-wrapper',
						slideClass: 'swiper-slide',
						grabCursor: false,
						allowTouchMove: true,
						speed: 1200, //slider transition speed
						parallax: true,
						autoplay: slide_autoplay ? { delay: slide_autoplay_delay } : false,
						effect: 'slide',
						mousewheelControl: 1,
						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							dynamicBullets: true,
							clickable: true,
						},
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						breakpoints: {
							0: {
								slidesPerView: 1,
								slidesPerGroup: 1,
							},
							767: {
								slidesPerView: 2,
								slidesPerGroup: 2,
							},
							1024: {
								slidesPerView: slides_to_show,
								slidesPerGroup: slides_to_show,
							},
						},
					} );
				} );
			}
		},
		// Qoxag_GallerySlider
		Qoxag_GallerySlider: function( $scope ) {
			let $container = $scope.find( '.qoxag-gallery' );
			if ( $container.length > 0 ) {
				let controls = $container.data( 'controls' );

				let slides_to_show = controls.slides_to_show;
				let slide_loop = Boolean( controls.slide_loop );
				let slide_autoplay = true;
				let slide_autoplay_delay = parseInt( controls.slide_autoplay_delay );
				let slider_space_between = parseInt( controls.slider_space_between );

				// eslint-disable-next-line
				$($container).each(function (index, element) {
					let $element = $( element ).find( '.swiper-container' );
					new Swiper( $element, {
						slidesPerView: parseInt( slides_to_show.desktop ),
						spaceBetween: slider_space_between,
						loop: slide_loop,
						wrapperClass: 'swiper-wrapper',
						slideClass: 'swiper-slide',
						grabCursor: false,
						allowTouchMove: true,
						speed: 1200, //slider transition speed
						parallax: true,
						autoplay: slide_autoplay ? { delay: slide_autoplay_delay } : false,
						effect: 'slide',
						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							dynamicBullets: true,
							clickable: true,
						},
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},

					} );
				} );
			}
		},

		// Qoxag_AudioSlider
		Qoxag_AudioSlider: function( $scope ) {
			let $container = $scope.find( '.qoxag-post-slider' );
			if ( $container.length > 0 ) {
				let controls = $container.data( 'controls' );

				let slide_loop = Boolean( controls.slide_loop );
				let slide_autoplay = Boolean( controls.slide_autoplay );
				let slide_autoplay_delay = parseInt( controls.slide_autoplay_delay );
				let slider_space_between = parseInt( controls.slider_space_between );
				let widget_id = controls.widget_id;

				// eslint-disable-next-line
				$($container).each(function (index, element) {
					let $element = $( element ).find( '.swiper-container' );
					new Swiper( $element, {
						slidesPerView: 'auto',
						centeredSlides: true,
						spaceBetween: slider_space_between,
						loop: slide_loop,
						wrapperClass: 'swiper-wrapper',
						slideClass: 'swiper-slide',
						grabCursor: false,
						allowTouchMove: true,
						speed: 1200, //slider transition speed
						parallax: true,
						autoplay: slide_autoplay ? { delay: slide_autoplay_delay } : false,
						effect: 'slide',
						mousewheelControl: 1,
						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							dynamicBullets: true,
							clickable: true,
						},
						navigation: {
							nextEl: `.swiper-next-${widget_id}`,
							prevEl: `.swiper-prev-${widget_id}`,
						},
					} );
				} );
			}
		},
	};
	$( window ).on( 'elementor/frontend/init', Qoxag.init );
}( jQuery, window.elementorFrontend ) );
