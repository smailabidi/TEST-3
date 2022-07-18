<div class="main-content-inner row category-layout">
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

   <h2 class="category-name-style4"><?php echo esc_html__('Latest ', 'qoxag'); ?><?php echo esc_html($category->name); ?></h2>

   <?php while ( have_posts() ) : the_post(); ?>      
      <?php  if($count < 5){
         if($count === 0){
      ?>
         <div class="category-feature-wrapper row">
            <div class="col-lg-8">
               <article id="post-<?php the_ID(); ?>" <?php post_class('featured-thumb post-layout'); ?>>
                  <?php get_template_part( 'template-parts/blog/category/parts/grid', 'content' ); ?>
               </article>
            </div>
         <?php }else{ ?>
         <?php  if($count === 1){ ?>
            <div class="col-lg-4">
               <div class="row feature-sm-post"> 
                  <?php } ?>
                   
                  <div class="col-lg-6">
                  <article id="post-<?php the_ID(); ?>" <?php post_class('small-thumb post-layout'); ?>>
                  <?php get_template_part( 'template-parts/blog/category/parts/grid', 'content' ); ?>
                  </article>
               </div>

               <?php } ?>
               <?php
               if($count == 4){
               echo "</div>
            </div>
               </div>";
            }
         ?>
           
      <?php }else {

         if($count === 5){ ?>
            <div class="category-list-wrapper row">
            <?php if($blog_sidebar == 'left-sidebar'){
				   get_sidebar('cat');
			   }  ?>            
            <div class="category-list-section <?php echo esc_attr($column);?>">
         <?php
         }
         ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class('post-layout'); ?>>
            <?php get_template_part( 'template-parts/blog/category/parts/right', 'content' ); ?>
         </article>
         <?php
      } ?>
   <?php $count++; endwhile; ?>
   
   <?php if($count >= 5) : ?>
      </div>
      <?php if($blog_sidebar == 'right-sidebar'){
         get_sidebar('cat');
      } ?>
   </div>
   <?php endif; ?>
</div>