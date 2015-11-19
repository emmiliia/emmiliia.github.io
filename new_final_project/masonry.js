$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
$('#container').imagesLoaded( function() {
  // images have loaded
});

// options
$('#container').imagesLoaded( {
  // options...
  },
  function() {
    // images have loaded
  }
);