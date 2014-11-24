'use strict';

angular.module('kitchensink')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
    $scope.appName = "Kitchen Sink"
  });
