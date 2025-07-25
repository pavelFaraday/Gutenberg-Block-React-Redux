<?php
// This file is generated. Do not modify it manually.
return array(
	'text-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/text-box',
		'version' => '0.1.0',
		'title' => 'Text Box',
		'category' => 'text',
		'description' => 'A simple text box.',
		'example' => array(
			
		),
		'keywords' => array(
			'text',
			'box',
			'content',
			'paragraph'
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'gradients' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'attributes' => array(
			'text' => array(
				'type' => 'string'
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'backgroundColor' => array(
				'type' => 'string'
			),
			'textColor' => array(
				'type' => 'string'
			)
		),
		'styles' => array(
			array(
				'name' => 'squared',
				'label' => 'Squared',
				'isDefault' => true
			),
			array(
				'name' => 'rounded',
				'label' => 'Rounded'
			)
		),
		'textdomain' => 'text-box',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
