ourApp.controller("TestimonialsCtrl", ['$scope', '$http', '$route','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

  $scope.testimonials = [
      {quote: "They're awesome!", attribution: "Bob the Builder"},
      {quote: "Super Duper!", attribution: "Some Guy"},
      {quote: "Recommended!", attribution: "Some Other Guy"},
      {quote: "Adequate!", attribution: "Mr. Duder"}
    ];

}]);
