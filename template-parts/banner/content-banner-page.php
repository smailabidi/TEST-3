<?php
$banner_image             = '';
$banner_title             = '';
$page_show_breadcrumb     = "";
$page_meta_show_breadcumb = "";
$show_breadcrumb          = "";

if ( defined( 'DEVM' ) ) {
    // Banner controls
    $page_show_banner      = qoxag_option('page_show_banner');
    $page_meta_show_banner = qoxag_meta_option( get_the_ID(), 'page_meta_show_banner', 'yes' );

    // banner disable enable facility
    if( $page_meta_show_banner != 'yes' ){
        return;
    } elseif ( $page_show_banner != 'yes' ){
        return;
    }

    $page_show_breadcrumb    = qoxag_option('page_show_breadcrumb');
    $page_banner_title       = qoxag_option('page_banner_title');
    $banner_page_image       = qoxag_option('banner_page_image');

    // Meta options
    $banner_image             = qoxag_meta_option( get_the_ID(), 'header_image' );
    $page_meta_show_breadcumb = qoxag_meta_option( get_the_ID(), 'page_meta_show_breadcumb' );

    // Customizer Settings
    $qoxag_page_banner_settings          = qoxag_option('page_banner_setting');

    //title
    if( qoxag_meta_option( get_the_ID(), 'header_title' ) !== '' ){
        $banner_title = qoxag_meta_option( get_the_ID(), 'header_title' );
    } elseif ( $page_banner_title !== '' ){
        $banner_title = $page_banner_title;
    } else {
        $banner_title   = get_the_title();
    }

    //image
    if( $banner_image != '' ){
        $banner_image = wp_get_attachment_image_url($banner_image, "full");
    } elseif ( $banner_page_image != '' ){
        $banner_image = wp_get_attachment_image_url($banner_page_image, "full");
    } else {
        $banner_image = '';
    }

    // Breacumb
    if( $page_meta_show_breadcumb === 'yes' ){
        $show_breadcrumb = "yes";
    } elseif ( $page_show_breadcrumb === 'yes' ){
        $show_breadcrumb = 'yes';
    } else {
        $show_breadcrumb = "";
    }

 }else{
     //default
     $banner_image            = "";
     $banner_title            = get_the_title();
     $show_breadcrumb         = "no";
 }


 $class_name = 'page-banner';
    
 get_template_part('template-parts/banner/banner', 'content', [
     'banner-image' => $banner_image,
     'banner-title' => $banner_title,
     'show-breadcrumb' => $show_breadcrumb,
     'class-name' => $class_name,
 ]);
?>