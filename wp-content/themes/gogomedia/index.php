<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="container">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<div class="entry">
				<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
				<div class="entry-date">Opublikowano <span><?php the_time('d-m-Y'); ?></span></div>
				<?php the_content('Czytaj dalej &rarr;'); ?>
			</div><!-- /entry -->

			<?php endwhile; else: ?>
			<p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
			<?php endif; ?>
        </div> <!-- /container -->
    </div> <!-- /main -->
</div> <!-- /primary -->

<?php get_footer(); ?>