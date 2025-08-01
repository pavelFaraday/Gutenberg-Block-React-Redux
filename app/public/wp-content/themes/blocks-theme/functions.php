<?php

/**
 * Blocks Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Blocks_Theme
 */

if (! defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function blocks_theme_setup()
{
	add_theme_support(
		'editor-styles'
	);
	add_editor_style('style-editor.css');
	add_theme_support(
		'responsive-embeds'
	);
	add_theme_support(
		'align-wide'
	);

	load_theme_textdomain('blocks-theme', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support('editor-color-palette', array(
		array(
			'name'  => __('Primary Color', 'blocks-theme'),
			'slug'  => 'primary',
			'color' => '#000000ff',
		),
		array(
			'name'  => __('Secondary Color', 'blocks-theme'),
			'slug'  => 'secondary',
			'color' => '#fac903ff',
		),
	));
	add_theme_support('editor-font-sizes', array(
		array(
			'name'      => __('Small', 'blocks-theme'),
			'shortName' => __('S', 'blocks-theme'),
			'size'      => 12,
			'slug'      => 'small',
		),
		array(
			'name'      => __('Regular', 'blocks-theme'),
			'shortName' => __('M', 'blocks-theme'),
			'size'      => 16,
			'slug'      => 'regular',
		),
		array(
			'name'      => __('Large', 'blocks-theme'),
			'shortName' => __('L', 'blocks-theme'),
			'size'      => 36,
			'slug'      => 'large',
		),
	));
	add_theme_support('custom-line-height');
	add_theme_support('custom-spacing');
	add_theme_support(
		'custom-units',
		'px',
		'em',
		'rem',
		'vh',
		'vw'
	);


	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__('Primary', 'blocks-theme'),
		)
	);

	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'blocks_theme_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action('after_setup_theme', 'blocks_theme_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function blocks_theme_content_width()
{
	$GLOBALS['content_width'] = apply_filters('blocks_theme_content_width', 640);
}
add_action('after_setup_theme', 'blocks_theme_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function blocks_theme_widgets_init()
{
	register_sidebar(
		array(
			'name'          => esc_html__('Sidebar', 'blocks-theme'),
			'id'            => 'sidebar-1',
			'description'   => esc_html__('Add widgets here.', 'blocks-theme'),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action('widgets_init', 'blocks_theme_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function blocks_theme_scripts()
{
	wp_enqueue_style('blocks-theme-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_style_add_data('blocks-theme-style', 'rtl', 'replace');

	wp_enqueue_script('blocks-theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'blocks_theme_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}
