<?php
$blog_author_show = qoxag_option( 'blog_details_author_show', 'yes');
$blog_date_show = qoxag_option( 'blog_details_date_show', 'yes');
$blog_view_count_show = qoxag_option( 'blog_single_view_count_show', 'no');
$blog_reading_time_show = qoxag_option( 'blog_single_reading_time_show', 'no');
$blog_category_show = qoxag_option( 'blog_details_category_show', 'yes');
$qoxag_categry_title_lenght = qoxag_option('qoxag_categry_title_lenght', '35');
$qoxag_blog_post_desc_show = qoxag_option('qoxag_blog_post_desc_show', 'yes');
$qoxag_categry_post_desc_lenght = qoxag_option('qoxag_categry_post_desc_lenght', '20');
$qoxag_single_number_of_categries = qoxag_option('qoxag_single_number_of_categries', '100');
$show_review_rating = qoxag_option( 'show_review_rating_single', 'no');
$blog_details_Comments_show = qoxag_option('blog_details_Comments_show', 'no');
$blog_single_font_zoom = qoxag_option( 'blog_single_font_zoom', 'no');
$blog_single_print = qoxag_option( 'blog_single_print', 'no');

?>
<div class="post-header post-header-style2 clearfix">
   
   <div class="category-single-post">
      <?php qoxag_post_categories(get_the_ID(), $qoxag_single_number_of_categries, 'contentpart', 'left-background'); ?>
   </div>
   

   <!-- Article content -->
   <div class="entry-content clearfix">
      <?php
         $blog_show_banner = qoxag_option('blog_single_show_banner');
         if($blog_show_banner != 'yes'){
            the_title( '<h1 class="entry-title">', '</h1>' );
         }
      ?>
   </div> <!-- end entry-content -->

   <div class="category-layout meta-wrapper">
      <?php 
         qoxag_post_meta_info(get_the_ID(), $blog_author_show, $blog_date_show, $blog_view_count_show, $blog_reading_time_show, $show_review_rating, $blog_details_Comments_show);
      ?>
       <div class="extra-meta">
         <?php 
            if($blog_single_font_zoom =="yes"):  
               qoxag_font_zoom();
            endif;
         ?>
         <?php 
            if($blog_single_print =="yes"): 
               qoxag_print();
            endif;
         ?>
      </div>
   </div>
    <!-- recepie meta field -->
    <?php  get_recipe_field(); ?>
    
</div> <!-- end post-body -->
