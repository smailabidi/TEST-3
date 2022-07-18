<div class="main-content-inner row category-layout">  
   <?php while ( have_posts() ) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class('post-layout col-md-12'); ?>>
         <?php get_template_part( 'template-parts/blog/category/parts/right', 'content' ); ?>
      </article>
   <?php endwhile; ?>
</div>