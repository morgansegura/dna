;(function() {
  

  'use strict';


  /**
   * Masonry directive
   *
       <div class="grid">
           <div class="grid-sizer"></div>
           <div class="gutter-sizer"></div>
           <div class="grid-item">
                <img src="https://ununsplash.imgix.net/photo-1421757295538-9c80958e75b0?fit=crop&fm=jpg&h=700&q=75&w=1050" alt="Image">
           </div>
           <div class="grid-item">
                <img src="https://unsplash.imgix.net/photo-1426200830301-372615e4ac54?fit=crop&fm=jpg&h=725&q=75&w=1050" alt="Image">
            </div>
           <div class="grid-item">
                <img src="https://unsplash.imgix.net/photo-1421977870504-378093748ae6?fit=crop&fm=jpg&h=700&q=75&w=1050" alt="Image">
           </div>
           <div class="grid-item">
                <img src="https://unsplash.imgix.net/photo-1420745981456-b95fe23f5753?fit=crop&fm=jpg&h=700&q=75&w=1050" alt="Image">
           </div>
           <div class="grid-item">
                <img src="https://download.unsplash.com/photo-1415871989540-61fe9268d3c8" alt="Image">
           </div>
       </div>
   *
   * @url http://masonry.desandro.com/options.html
   * 
   */
  angular
    .module('dna')
    .directive('masonry-gallery', masonry);

  function masonry() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        scope.$watch(function() {
          angular.element(document).ready(function() {

              var $grid = $('.grid').masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                gutter: 10,
            });
              $grid.imagesLoaded().progress(function() {
                  $grid.masonry();
              })
              .always( function( instance ) {
                  console.log('all images loaded');
              })
              .done( function( instance ) {
                  console.log('all images successfully loaded');
              })
              .fail( function() {
                  console.log('all images loaded, at least one is broken');
              })
              /*
               .progress( function( instance, image ) {
               var result = image.isLoaded ? 'loaded' : 'broken';
               console.log( 'image is ' + result + ' for ' + image.img.src );
               });
               */
          });
        });
      }
    };

    return directiveDefinitionObject;
  }

})();
