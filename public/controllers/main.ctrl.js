ourApp.controller("TabsCtrl", ['$scope', '$http', '$route','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

    $scope.tabs = [
        { link : '#/', label : 'Home' },
        { link : '#/about', label : 'About' },
        { link : '#/testimonials', label : 'Testimonials' },
        { link : '#/contact', label : 'Contact' }
      ];

    $scope.selectedTab = $scope.tabs[0];
    $scope.setSelectedTab = function(tab) {
      $scope.selectedTab = tab;
    }

    $scope.tabClass = function(tab) {
      if ($scope.selectedTab == tab) {
        return "active";
      } else {
        return "";
      }
    }

}]);
