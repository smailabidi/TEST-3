<?php

 $blog_related_post = qoxag_option('blog_related_post','no');
 $blog_related_post_number = qoxag_option('blog_related_post_number',3);
 $blog_related_heading = qoxag_option('blog_related_heading', esc_html__('Stories for you', 'qoxag'));
 $blog_related_subheading = qoxag_option('blog_related_subheading', esc_html__('Related', 'qoxag'));

?>
<?php if($blog_related_post=="yes"): ?>
   <?php
      $related_post = qoxag_related_posts_by_tags($post->ID,$blog_related_post_number);

      if( $related_post->have_posts() ) { ?>
         <div class="related-post-title-wraper">
            <div class="widget-title">
               <span>
                  <strong><?php echo esc_html($blog_related_heading); ?></strong>
                  <?php echo esc_html($blog_related_subheading); ?>
               </span>
            </div>
         </div>
         <div class="row category-layout">
            <?php
            while ($related_post->have_posts()) : $related_post->the_post(); ?>
            <div class="col-lg-4 col-md-6">
               <?php get_template_part( 'template-parts/blog/category/parts/grid', 'content' ); ?> 
            </div>
            <?php endwhile; ?>
         </div>
      <?php
   }
    wp_reset_postdata();

  ?>
<?php endif; ?>
