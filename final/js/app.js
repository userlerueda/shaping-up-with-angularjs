(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];

    $http.get('/store-products.json')
    .then(successCallback, errorCallback);

    function successCallback(response){
      store.products = response.data;
    }

    function errorCallback(error){
      console.log(error);
    }

  }]);

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });


})();
