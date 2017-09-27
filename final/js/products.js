(function() {
  var app = angular.module('store-directives', []);

  app.directive("productTabs", function() {
      return {
        restrict: 'E',
        templateUrl: 'product-tabs.html',
        controllerAs: 'tab',
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        }

      };
    });

  app.directive("productGallery", function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productReview", function() {
      return {
        restrict: 'E',
        templateUrl: "product-review.html"
      };
  });

})();
