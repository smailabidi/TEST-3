<?php
    if(has_post_thumbnail(get_the_ID())){ 
        qoxag_post_thumbnail(get_the_ID(), 'large', 0.7);
        $thumb_class = ' with-thumb';
    } else{
        $thumb_class = ' no-thumb';
    }
?>

<?php
    if ( is_sticky() ) {
        echo '<sup class="meta-featured-post"> <i class="fas fa-thumbtack"></i> ' . esc_html__( 'Sticky', 'qoxag' ) . ' </sup>';
    }
?> 

<div class="post-content<?php echo esc_attr($thumb_class); ?>">
    <?php    
    $blog_author_show = qoxag_option( 'blog_author_show', 'yes');
    $blog_date_show = qoxag_option( 'blog_date_show', 'yes');
    $blog_view_count_show = qoxag_option( 'blog_view_count_show', 'no');
    $blog_reading_time_show = qoxag_option( 'blog_reading_time_show', 'no');
    $blog_category_show = qoxag_option( 'blog_category_show', 'yes');
    $qoxag_categry_title_lenght = qoxag_option('qoxag_categry_title_lenght', '35');
    $qoxag_blog_post_desc_show = qoxag_option('qoxag_blog_post_desc_show', 'yes');
    $qoxag_categry_post_desc_lenght = qoxag_option('qoxag_categry_post_desc_lenght', '20');
    $qoxag_number_of_categries = qoxag_option('qoxag_number_of_categries', '100');
    $show_review_rating = qoxag_option( 'show_review_rating', 'no');

    if($blog_category_show == 'yes'){
        qoxag_post_categories(get_the_ID(), $qoxag_number_of_categries, $args['category_position'], $args['category_bg_style']);
    }

    qoxag_post_title(get_the_ID(), $qoxag_categry_title_lenght);

    qoxag_post_meta_info(get_the_ID(), $blog_author_show, $blog_date_show, $blog_view_count_show, $blog_reading_time_show, $show_review_rating);    
    
    if($qoxag_blog_post_desc_show == 'yes'){
        qoxag_post_excerpt(get_the_ID(), $qoxag_categry_post_desc_lenght);
    }    
    ?>
</div>