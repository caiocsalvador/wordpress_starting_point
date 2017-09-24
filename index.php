<? get_header(); ?>
<main role="main">	
	<section id="blog">
		<div class="container">
			<h2 class="title hide-on-start">Blog</h2>
			<div class="posts-list">
				<div class="row">				
					<?php
						$args = array(
							'posts_per_page' => 4
						);
					?>
					<? $query = new WP_Query($args);?>
					<? if ( $query->have_posts() ): ?>
						<? while ( $query->have_posts() ) : $query->the_post()?>
							<?php get_template_part('template-parts/list', get_post_format()); ?>
						<? endwhile; ?>
					<? endif; ?>
					<?php wp_reset_postdata(); ?>
				</div>
			</div>			
		</div>
	</section>	
<? get_footer(); ?>