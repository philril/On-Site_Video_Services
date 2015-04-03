var ourApp = angular.module('ourApp', ['ngSanitize', 'ngRoute', 'ngCookies'])

ourApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        activePage: '#/'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        activePage: '#/contact'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        activePage: '#/about'
      }).
      when('/testimonials', {
        templateUrl: 'partials/testimonials.html',
        activePage: '#/testimonials'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
