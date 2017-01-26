'use strict';

describe('Controller: ManageChapterchatCtrl', function () {

  // load the controller's module
  beforeEach(module('ohanaApp'));

  var ManageChapterchatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageChapterchatCtrl = $controller('ManageChapterchatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ManageChapterchatCtrl.awesomeThings.length).toBe(3);
  });
});