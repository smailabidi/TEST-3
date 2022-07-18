<?php
   //header ads
   $single_post_content_top_ads = qoxag_option('single_post_content_top_ads');
   if($single_post_content_top_ads != ''){ ?> 
      <div class="content-top-advertisment">
         <?php echo do_shortcode($single_post_content_top_ads); ?>
      </div>
   <?php }
   
   if(get_post_format() == 'video'){
      if( defined( 'DEVM' ) && qoxag_meta_option(get_the_ID(),'featured_video')!=''){ 
         $video_url = qoxag_meta_option(get_the_ID(), 'featured_video', '');
         $video_url = qoxag_video_embed($video_url);
      ?>
      <div class="embed-responsive embed-responsive-16by9">
         <iframe class="embed-responsive-item" src="<?php echo esc_url($video_url); ?>" allowfullscreen>
         </iframe>
      </div>
      <?php 
      } else{
         if ( has_post_thumbnail() && !post_password_required() ){ ?>
            <div class="post-media post-image">
               <img class="img-fluid" src="<?php echo esc_url(get_the_post_thumbnail_url()); ?>" alt=" <?php esc_attr(the_title_attribute()); ?>">              
            </div>
         <?php }
      }
   } elseif(get_post_format() == 'audio'){
      $audio_url = qoxag_meta_option(get_the_ID(), 'format_audio_url', '');
      if($audio_url != ''){
         ?>
         <div class="audio-embed">
            <?php echo do_shortcode('[audio src="'.$audio_url.'"]'); ?>
         </div>
         <?php
      } else{
         if ( has_post_thumbnail() && !post_password_required() ){ ?>
            <div class="post-media post-image">
               <img class="img-fluid" src="<?php echo esc_url(get_the_post_thumbnail_url()); ?>" alt=" <?php esc_attr(the_title_attribute()); ?>">              
            </div>
         <?php }
      }

   } else{
      if ( has_post_thumbnail() && !post_password_required() ){ ?>
         <div class="post-media post-image">
            <img class="img-fluid" src="<?php echo esc_url(get_the_post_thumbnail_url()); ?>" alt=" <?php esc_attr(the_title_attribute()); ?>">              
         </div>
      <?php }
   }
?>


<div class="post-body clearfix">

   <!-- Article content -->
   <div class="entry-content clearfix">
      <?php
      if ( is_search() ) {
         the_excerpt();
      } else {
         the_content( esc_html__( 'Continue reading &rarr;', 'qoxag' ) );
         qoxag_link_pages();
      }
      ?>
      <?php
         if ( is_user_logged_in() && is_single() ) {
      ?>

         <p style="float:left;margin-top:20px;">
            <?php
            edit_post_link(
               esc_html__( 'Edit', 'qoxag' ),
               '<span class="meta-edit">',
               '</span>'
            );
            ?>
         </p>
      <?php
         }
      ?>
   </div> <!-- end entry-content -->
</div> <!-- end post-body -->
