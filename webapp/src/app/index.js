'use strict';

angular.module('deer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router']); 
angular.module('kitchensink', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'deer'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
	  
    $stateProvider
      .state('deer', {
        url: '/deer',
        templateUrl: 'app/deer/deer.html'
      });	  

    $urlRouterProvider.otherwise('/');
  })
;
