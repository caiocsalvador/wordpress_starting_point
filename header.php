<!doctype html>
<html <?php language_attributes();?> >
	<head>
		<meta charset="<?php bloginfo('charset') ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!--<meta name="description" content="<?php //bloginfo('description'); ?>">-->
		<? wp_head(); ?>		
		<title><?php wp_title('|'); ?></title>
	</head>
	<body <?php body_class(); ?>>
	<header>
		<div class="container">
			<div class="cont-header d-flex justify-content-between">
				<h1 class="logo">Vamos English
					<a href="<?=home_url();?>">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.jpg" alt=""/>
					</a>
				</h1>
				<nav class="main-menu d-none d-lg-flex">
					<?php wp_nav_menu(array('theme_location'=>'main')); ?>		
				</nav>
				<div class="d-sm-flex d-md-flex d-none">
					<a href="#" onclick="menuMobile(event)"><i class="fa fa-bars" aria-hidden="true"></i></a>
				</div>
			</div>	
		</div>	
	</header>
	<div id="side-nav">
		<a href="#" class="side-close" onclick="menuMobile(event)"><i class="fa fa-times" aria-hidden="true"></i></a>
		<nav>
			<?php wp_nav_menu(array('theme_location'=>'mobile')); ?>
		</nav>
	</div>