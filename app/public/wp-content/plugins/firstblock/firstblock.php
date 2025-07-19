<?php

/**
 * Plugin Name: First Block
 * Plugin URI: https://www.linkedin.com/in/giorgi-epitashvili/
 * Description: My first block
 * Author: Giorgi Epitashvili
 * Author URI: https://www.linkedin.com/in/giorgi-epitashvili/
 */

function blocks_course_firstblock_init()
{
    // Registers a block type from the metadata stored in the block.json file.
    register_block_type_from_metadata(__DIR__);
}
add_action("init", "blocks_course_firstblock_init");
