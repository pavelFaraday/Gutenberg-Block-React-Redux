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
	return 'Latest Posts BlablaBla';
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
