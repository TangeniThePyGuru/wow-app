'use strict';

describe('Controller: QAndACtrl', function () {

  // load the controller's module
  beforeEach(module('wowAppApp'));

  var QAndACtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QAndACtrl = $controller('QAndACtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
