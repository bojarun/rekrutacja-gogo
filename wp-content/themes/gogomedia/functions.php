<?php

/**
 * Register Custom Slider Item Block
 */
function acf_slider_item_block() {
	if( function_exists('acf_register_block') ) {
		acf_register_block(array(
			'name'				=> 'slider-item',
			'title'				=> __('Slider Item'),
			'description'		=> __('A custom gutenberg block for slider items.'),
			'render_template'	=> 'template-parts/blocks/slider-item/block-slider-item.php',
			'category'			=> 'layout',
			'icon'				=> 'excerpt-view',
			'keywords'			=> array( 'slider' ),
		));
	}
}
add_action('acf/init', 'acf_slider_item_block');

/**
 * Enqueue styles for editor
 */
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_style( 'gogomedia-custom-block-editor-styles',
        get_theme_file_uri( '/assets/scss/main.css' ),
        false, wp_get_theme()->get( 'Version' ));
});

/**
 * Add slider scripts for frontend
 */
if (!is_admin()) {
    wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/slider.js', array ( 'jquery' ), true);
}

?>