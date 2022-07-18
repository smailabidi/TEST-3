<?php

if(get_query_var( 'cat' ) != ''){
    $category = get_category( get_query_var( 'cat' ) );
    $cat_layout = qoxag_cat_layout($category->cat_ID);
} else{
    $cat_layout = 'style1'; 
}
 
get_template_part( 'template-parts/blog/category/style/content', $cat_layout );
