$(document).ready(function() {
	var $grid =$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
$grid.imagesLoaded().progress( function() {   $grid.masonry('layout'); });	
});
