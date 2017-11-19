'use strict';

/**
 * @ngdoc directive
 * @name wowAppApp.directive:login
 * @description
 * # login
 */
angular.module('wowAppApp')
  .directive('login', function () {
    return {
      templateUrl: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the login directive');
      }
    };
  });