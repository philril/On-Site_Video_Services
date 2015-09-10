ourApp.controller("MainCtrl", ['$scope', '$http','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

  $scope.mainImages = ['./public/images/parking_lot.jpg',2,3];

  $(document).ready(function(){
    console.log("yeah")
      $('.youtube').fadeIn(600)
    }
  );

}]);

