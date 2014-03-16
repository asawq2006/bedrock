/*!
 * Add Identity Modal.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define(['angular'], function(angular) {

'use strict';

var deps = ['svcModal', 'svcIdentity'];
return {modalAddIdentity: deps.concat(factory)};

function factory(svcModal, svcIdentity) {
  function Ctrl($scope, config) {
    $scope.model = {};
    $scope.data = config.data;
    $scope.baseUrl = config.data.baseUri;
    $scope.feedback = {};
    $scope.loading = false;
    // identity
    $scope.identityType = $scope.identityTypes[0];
    $scope.identityLabel = '';
    $scope.identitySlug = '';
    $scope.identity = {};
    $scope.identityTypeLabels = {
      'Identity': 'Identity'
    };
    angular.forEach($scope.identityTypes, function(type) {
      $scope.identity[type] = {
        '@context': config.data.contextUrl,
        type: type
      };
    });

    $scope.addIdentity = function() {
      var identity = $scope.identity[$scope.identityType];
      identity.label = $scope.identityLabel;
      identity.sysSlug = $scope.identitySlug;
      $scope.loading = true;
      var promise = svcIdentity.add(identity);
      promise.then(function(identity) {
        $scope.loading = false;
        $scope.feedback.error = null;
        $scope.modal.close(null, {identity: identity});
        $scope.$apply();
      }).catch(function(err) {
        $scope.loading = false;
        $scope.feedback.error = err;
        $scope.$apply();
      });
    };
  }

  return svcModal.directive({
    name: 'AddIdentity',
    scope: {
      identityTypes: '='
    },
    templateUrl: '/app/templates/modals/add-identity.html',
    controller: ['$scope', 'config', Ctrl],
    link: function(scope, element, attrs) {
      scope.feedbackTarget = element;
    }
  });
}

});