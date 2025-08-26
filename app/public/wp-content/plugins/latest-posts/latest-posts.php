<?php

/**
 * Plugin Name:       Latest Posts
 * Description:       Display & Filter latest posts
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Giorgi Epitashvili
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       latest-posts
 *
 * @package BlockCourse
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Server-side render callback.
 * If using the collection helpers, add `"render": "block_course_latest_posts_block"` in block.json.
 */
function block_course_latest_posts_block($attributes, $content, $block)
{
	$args = array(
		'posts_per_page' => $attributes['numberOfPosts'] ?? 5,
		'post_status' => 'publish',
	);
	$recent_posts = get_posts($args);

	$posts = '<ul ' . get_block_wrapper_attributes() .  '>';
	foreach ($recent_posts as $post) {
		$title = get_the_title($post);
		$title = $title ? $title : __('(no title)', 'latest-posts');
		$permalink = get_permalink($post);
		$excerpt = get_the_excerpt($post);

		$posts .= '<li>';


		if ($attributes['displayFeaturedImage'] && has_post_thumbnail($post)) {
			$posts .= get_the_post_thumbnail($post, 'large');
		}

		$posts .= '<h5><a href="' . esc_url($permalink) . '">' . esc_html($title) . '</a></h5>';
		if ($excerpt) {
			$posts .= '<p>' . esc_html($excerpt) . '</p>';
		}
		$posts .= '<time datetime="' . esc_attr(get_the_date('c', $post)) . '">' . esc_html(get_the_date('', $post)) . '</time>';
		$posts .= '</li>';
	}
	$posts .= '</ul>';

	return $posts;
}

function block_course_latest_posts_block_init()
{
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type_from_metadata(
			__DIR__ . "/build/{$block_type}",
			array('render_callback' => 'block_course_latest_posts_block')
		);
	}
}
add_action('init', 'block_course_latest_posts_block_init');
