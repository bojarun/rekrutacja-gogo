<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1,minimal-ui" />
		<title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
		<?php wp_head(); ?>
    </head>
<body>

    <header id="header" class="header">
        <div class="container">
            <a id="logo" href="/" title="Home page PSD2CSS.pl">
                <img src="<?php echo get_template_directory_uri() ?> /assets/images/logo-psd2css.svg" alt="PSD to CSS" width="165" height="38">
            </a>
        </div>
    </header>
