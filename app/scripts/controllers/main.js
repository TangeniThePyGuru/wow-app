'use strict';

/**
 * @ngdoc function
 * @name wowAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wowAppApp
 */
angular.module('wowAppApp')
  .controller('MainCtrl', ["auth", "$scope", "$location", function (auth, $scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
