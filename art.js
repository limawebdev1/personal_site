jQuery.noConflict();
jQuery(document).ready(function($){
  var $grid = $('.grid').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
      // options...
    });
  });
})
