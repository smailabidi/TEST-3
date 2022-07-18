jQuery( function( $ ) {
	if ( $( '.sub-menu-toggle' ).length ) {
		$( '.sub-menu-toggle' ).on( 'click', function() {
			if ( $( window ).width() > 991 ) {
				return;
			}
			if ( $( this ).attr( 'aria-expanded' ) === 'false' ) {
				$( this ).attr( 'aria-expanded', 'true' );
			} else {
				$( this ).attr( 'aria-expanded', 'false' );
			}
			$( this ).siblings( '.sub-menu' ).slideToggle( 500 );
		} );
	}
	function menu_toggle( current ) {
		let target = current.attr( 'aria-controls' );
		if ( $( '#' + target ).hasClass( 'nav_menu_open' ) ) {
			$( '#' + target ).removeClass( 'nav_menu_open' );
		} else {
			$( '#' + target ).addClass( 'nav_menu_open' );
		}
		if ( ! current.hasClass( 'toggle' ) ) {
			current.addClass( 'toggle' );
		}
	}
	if ( $( '.nav-menu-toggle' ).length ) {
		$( '.nav-menu-toggle, .nav-menu-backdrop' ).on( 'click', function() {
			if ( $( '.nav-menu-toggle' ).hasClass( 'toggle' ) ) {
				$( '.nav-menu-toggle' ).removeClass( 'toggle' );
			}
			menu_toggle( $( this ) );
		} );
	}

	/* Font Zomm Effect */

	let size = '';

	function getSize() {
		size = $( '.entry-content > p' ).css( 'font-size' );
		size = parseInt( size, 10 );
	}

	getSize();

	$( '.zoomin' ).on( 'click', function() {
		if ( ( size + 2 ) <= 50 ) {
			$( '.entry-content > p' ).css( 'font-size', '+=2' );
		}
	} );

	$( '.zoomout' ).on( 'click', function() {
		if ( ( size - 2 ) >= 14 ) {
			$( '.entry-content > p' ).css( 'font-size', '-=2' );
		}
	} );

	/*
		Qoxag Post Tab widget
	*/
	$( document ).on( 'click', '.qoxag-tab-a', function( event ) {
		event.preventDefault();

		let parentSelector = $( this ).parents( '.qoxag-wrapper' );
		parentSelector.find( '.tab-pane' ).removeClass( ' show active' );
		parentSelector.find( ".tab-pane[data-id='" + $( this ).attr( 'data-id' ) + "']" ).addClass( ' active ' );
		parentSelector.find( '.qoxag-tab-a' ).removeClass( 'active' );
		$( this ).parent().find( '.qoxag-tab-a' ).addClass( 'active' );
	} );

	/**
	 *  Dark/Light Mode
	 */
	$( document ).on( 'click', '.change-mode', function() {
		var defaultSkin = $( 'html' ).data( 'skin' ),
			siteSkin = 'light';

		if ( $( 'html' ).hasClass( 'dark-mode' ) ) {
			siteSkin = 'dark';
		}

		var switchTo = ( siteSkin === 'dark' ) ? 'light' : 'dark';

		if ( 'undefined' !== typeof localStorage ) {
			localStorage.setItem( 'digi-skin', switchTo );
		}

		if ( defaultSkin === switchTo ) {
			$( 'html' ).removeClass( 'digi-skin-switch' );
		} else {
			$( 'html' ).addClass( 'digi-skin-switch' );
		}

		if ( switchTo === 'dark' ) {
			$( 'html' ).addClass( 'dark-mode' );
		} else {
			$( 'html' ).removeClass( 'dark-mode' );
		}
	} );

	/*
		sidebar sticky
	*/
	//eslint-disable-next-line
	if ( qoxag_ajax.blog_sticky_sidebar === 'yes' ) {
		$( '.main-container .row > .col-lg-4' ).theiaStickySidebar( {
			additionalMarginTop: 30,
		} );
	}

	/*
		Qoxag Preloader
	*/

	$( window ).on( 'load', function() {
		setTimeout( () => {
			$( '#preloader' ).addClass( 'loaded' );
		}, 1000 );
	} );

	// preloader close
	$( '.preloader-cancel-btn' ).on( 'click', function( e ) {
		e.preventDefault();
		if ( ! ( $( '#preloader' ).hasClass( 'loaded' ) ) ) {
			$( '#preloader' ).addClass( 'loaded' );
		}
	} );

	/*
		Qoxag Progressbar
	*/

	window.onscroll = function() {
		reading_progressbar();
	};
	function reading_progressbar() {
		var qoxag_winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var qoxag_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var qoxag_scrolled = ( qoxag_winScroll / qoxag_height ) * 100;
		if ( document.getElementById( 'readingProgressbar' ) ) {
			document.getElementById( 'readingProgressbar' ).style.width = qoxag_scrolled + '%';
		}
	}

	reading_progress_bar_post();

	function reading_progress_bar_post() {
		var progressWrap = $( '.qoxag_progress_container' );
		var entry_top = $( '.entry-content' );

		if ( entry_top.length > 0 ) {
			if ( progressWrap.length > 0 ) {
				var didScroll = false,
					windowWrap = $( window ),

					contentWrap = $( '.entry-content' ),
					contentHeight = contentWrap.height(),
					windowHeight = windowWrap.height() * .85;

				$( window ).scroll( function() {
					didScroll = true;
				} );

				$( window ).on( 'resize', function() {
					windowHeight = windowWrap.height() * .85;
					progressReading();
				} );

				setInterval( function() {
					if ( didScroll ) {
						didScroll = false;
						progressReading();
					}
				}, 150 );

				var progressReading = function() {
					var windowScroll = windowWrap.scrollTop(),
						contentOffset = contentWrap.offset().top,
						contentScroll = ( windowHeight - contentOffset ) + windowScroll,
						progress = 0;

					if ( windowHeight > contentHeight + contentOffset ) {
						progressWrap.find( '.progress-bar' ).width( 0 );
					} else {
						if ( contentScroll > contentHeight ) {
							progress = 100;
						} else if ( contentScroll > 0 ) {
							progress = ( contentScroll / contentHeight ) * 100;
						}

						progressWrap.find( '.progress-bar' ).width( progress + '%' );
					}
				};
			}
		} else {
			return false;
		}
	}

	$.fn.isInViewport = function() {
		let elementTop = $( this ).offset().top;
		let elementBottom = elementTop + $( this ).outerHeight();

		let viewportTop = $( window ).scrollTop();
		let viewportBottom = viewportTop + $( window ).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$( window ).on( 'scroll', function() {
		$( '.ajax-loader-current-url' ).each( function() {
			if ( $( this ).isInViewport() ) {
				var current_url = $( this ).data( 'current-url' );
				if ( window.location.href !== current_url ) {
					window.history.pushState( 'html', 'title', current_url );
				}
			}
		} );

		$( '.blog-ajax-load-more-trigger' ).each( function( index ) {
			if ( $( this ).isInViewport() ) {
				var current_post = index + 1;
				var _this = $( this );
				var next_post_url = $( this ).data( 'next-post-url' );
				var max_posts = $( this ).data( 'max-posts' );
				var content_loaded = $( this ).data( 'content-loaded' );

				if ( current_post >= max_posts ) {
					_this.fadeOut( 2000 );
					return;
				}

				if ( content_loaded === 'no' ) {
					$.ajax( {
						type: 'GET',
						url: next_post_url,
						success: function( content ) {
							var content1 = $( content ).find( '#blog-ajax-load-more-container' ).html();
							_this.after( content1 );
						},
					} );
				}
				_this.fadeOut( 2000 );
				_this.data( 'content-loaded', 'yes' );
			}
		} );
	} );
	/*--------------scroll end---------*/
} );
