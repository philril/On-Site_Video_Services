var ourApp = angular.module('ourApp', ['ngSanitize', 'ngRoute', 'ngCookies'])

ourApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html'
      }).
      when('/about', {
        templateUrl: 'partials/about.html'
      }).
      when('/testimonials', {
        templateUrl: 'partials/testimonials.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
