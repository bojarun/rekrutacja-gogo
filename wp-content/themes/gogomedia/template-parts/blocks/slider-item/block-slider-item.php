<?php

$heading = get_field( 'heading' );
$text = get_field( 'text' );
$icon = get_field( 'icon' );

echo '<div class="slider__item">';
    echo '<div class="box">';
	if( !empty( $heading ) )
		echo '<h3>' . $heading . '</h3>';
	if( !empty( $text ) )
		echo '<p>' . $text . '</p>';
    if( !empty( $icon ) )
		echo wp_get_attachment_image( $icon['ID'], 'thumbnail', null, array() );
	echo '</div>';
echo '</div>';

?>