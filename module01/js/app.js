(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function($scope) {
    $scope.products = gems;
  });

  var gems = [{
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: false,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '. . .',
    canPurchase: false,
    soldOut: false,
  }
]
})();
