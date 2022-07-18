<div class="post-quote-wrapper category-layout">
   <div class="post-quote-content post-body">
      <div class="entry-header">
            <h3 class="post-heading">
               <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h3>
            <p class="mb-0"><?php qoxag_excerpt( 30, null ); ?></p>
            <?php if ( is_sticky() ) {
                  echo '<sup class="meta-featured-post"> <i class="fas fa-thumbtack"></i> ' . esc_html__( 'Sticky', 'qoxag' ) . ' </sup>';
            } ?>
      </div>
   </div>
</div>