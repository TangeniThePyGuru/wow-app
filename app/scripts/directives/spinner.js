'use strict';

/**
 * @ngdoc directive
 * @name wowAppApp.directive:spinner
 * @description
 * # spinner
 */
angular.module('wowAppApp')
  .directive('spinner', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the spinner directive');
      }
    };
  });