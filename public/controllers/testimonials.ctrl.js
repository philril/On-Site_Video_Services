ourApp.controller("TestimonialsCtrl", ['$scope', '$http', '$route','$cookies', '$location', function($scope, $http, $route, $cookies, $location){

  $scope.testimonials = [
      {quote: "Super Duper!", attribution: "Some Guy"},
      {quote: "Recommended!", attribution: "Some Other Guy"},
      {quote: "Very good!", attribution: "Somebody"},
      {quote: "They're awesome! Marty and Charlie are incredibly professional and knowledgeable. They were fast and friendly.", attribution: "Bob the Builder"}
    ];

}]);
