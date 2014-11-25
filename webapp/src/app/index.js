'use strict';

angular.module('picture', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router']); 
angular.module('kitchensink', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'picture'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
	  
    $stateProvider
      .state('picture', {
        url: '/picture',
        templateUrl: 'app/picture/picture.html'
      });	  

    $urlRouterProvider.otherwise('/');
  })
;
