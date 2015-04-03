ourApp.controller("NavCtrl", ['$scope', '$http', '$route','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

    $scope.$route = $route;

    $scope.tabs = [
        { link : '#/', label : 'Home' },
        { link : '#/about', label : 'About' },
        { link : '#/testimonials', label : 'Testimonials' },
        { link : '#/contact', label : 'Contact' }
      ];

}]);