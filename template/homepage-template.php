<?php
/*
 * Template Name: HomePage Template
 *  */

get_header();
?>
<div class="home-inner-content">
<?php
while (have_posts()) :
    the_post();
    the_content();
endwhile;
?>
</div>
<?php
get_footer();