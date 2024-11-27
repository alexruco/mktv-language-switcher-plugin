<?php
/**
 * Plugin Name: Mktv Language Switcher Plugin
 * Plugin URI:  https://marketividade.com
 * Description: Dynamically creates a language switcher from hreflang tags, highlighting the active language.
 * Version:     1.1
 * Author:      Alex Ruco
 * Author URI:  https://alex@ruco.pt
 * Text Domain: mktv-language-switcher
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Enqueue JavaScript and CSS for the language switcher
function mktv_enqueue_language_switcher_assets() {
    error_log('Enqueueing assets...');

    // Enqueue the JavaScript file
    wp_enqueue_script(
        'mktv-language-switcher',
        plugin_dir_url(__FILE__) . 'js/language-switcher.js',
        array(),
        '1.1',
        true
    );

    // Enqueue the CSS file
    wp_enqueue_style(
        'mktv-language-switcher-style',
        plugin_dir_url(__FILE__) . 'css/mktv-language-switcher-style.css',
        array(),
        '1.1',
        'all'
    );
}
add_action('wp_enqueue_scripts', 'mktv_enqueue_language_switcher_assets');

// Add shortcode to render the language switcher container
function mktv_language_switcher_shortcode() {
    error_log('Rendering shortcode...');
    return '<div id="language-switcher-container"></div>';
}
add_shortcode('mktv_language_switcher', 'mktv_language_switcher_shortcode');
