<div class="main-content-inner category-layout style6">
   <?php
   $blog_sidebar = qoxag_option('blog_sidebar', 'right-sidebar');

	$column = ($blog_sidebar == 'no-sidebar' || !is_active_sidebar('sidebar-1')) ? 'col-lg-10 mx-auto' : 'col-lg-8 col-md-12 ';

	$blog_sidebar_class = '';
	if ($blog_sidebar != 'no-sidebar') {
		$blog_sidebar_class = 'sidebar-active';
	} else {
		$blog_sidebar_class = 'sidebar-inactive';
	}

   $category = get_category( get_query_var( 'cat' ) );
   $count = 0;
   ?>

   <h2 class="category-name-style6"><?php echo esc_html__('Latest ', 'qoxag'); ?><?php echo esc_html($category->name); ?></h2>

   <?php while ( have_posts() ) : the_post(); ?>      
      <?php  if($count < 4){
         if($count === 0){
      ?>
         <div class="category-feature-wrapper row">
            <div class="col-lg-7">
               <article id="post-<?php the_ID(); ?>" <?php post_class('featured-thumb post-layout'); ?>>
                  <?php get_template_part( 'template-parts/blog/category/parts/grid', 'content' ); ?>
               </article>
            </div>
         <?php }else{ ?>
         <?php  if($count === 1){ ?>
            <div class="col-lg-5">
               <div class="row feature-sm-post"> 
                  <?php } ?>
                   
                  <div class="col-12 post-list">
                  <article id="post-<?php the_ID(); ?>" <?php post_class('small-thumb post-layout'); ?>>
                  <?php get_template_part( 'template-parts/blog/category/parts/grid', 'content2' ); ?>
                  </article>
               </div>

               <?php } ?>
               <?php
               if($count == 3){
               echo "</div>
            </div>
               </div>";
            }
         ?>
           
      <?php }else {
         ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class('post-layout'); ?>>
            <?php get_template_part( 'template-parts/blog/category/parts/left', 'content' ); ?>
         </article>
         <?php
      } ?>
   <?php $count++; endwhile; ?>
   
  
</div>