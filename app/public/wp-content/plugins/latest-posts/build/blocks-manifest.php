<?php
// This file is generated. Do not modify it manually.
return array(
	'latest-posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'block-course/latest-posts',
		'render' => 'block_course_latest_posts_block',
		'version' => '0.1.0',
		'title' => 'Latest Posts',
		'category' => 'widgets',
		'icon' => 'admin-post',
		'description' => 'Display & Filter latest posts',
		'example' => array(
			
		),
		'attributes' => array(
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 5
			),
			'displayFeaturedImage' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'latest-posts',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
