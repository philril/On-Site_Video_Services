var ourApp = angular.module('ourApp', ['ngSanitize', 'ngRoute', 'ngCookies'])

ourApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'public/partials/home.html',
        activePage: '#/'
      }).
      when('/contact', {
        templateUrl: 'public/partials/contact.html',
        activePage: '#/contact'
      }).
      when('/about', {
        templateUrl: 'public/partials/about.html',
        activePage: '#/about'
      }).
      when('/testimonials', {
        templateUrl: 'public/partials/testimonials.html',
        activePage: '#/testimonials'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
