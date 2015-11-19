$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
$('.grid').imagesLoaded( function() {
  // images have loaded
});

// options
$('.grid').imagesLoaded( {
  // options...
  },
  function() {
    // images have loaded
  }
);
$('.grid').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });