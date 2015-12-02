$(document).ready(function() {
	var $grid = $('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer'
	});

	$grid.imagesLoaded().progress( function() {
	  $grid.masonry('layout');
	});

});