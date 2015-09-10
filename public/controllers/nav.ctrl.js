ourApp.controller("NavCtrl", ['$scope', '$http','$cookies', '$location', '$anchorScroll', function($scope, $http, $cookies, $location, $anchorScroll){

    $scope.tabs = [
        { link : 'home', label : 'Home' },
        { link : 'about', label : 'About' },
        { link : 'testimonials', label : 'Testimonials' },
        { link : 'contact', label : 'Contact' }
      ];

    $scope.scrollTo = function(id) {
      console.log('eay')
      $location.hash(id);
      $anchorScroll();
    }

}]);
