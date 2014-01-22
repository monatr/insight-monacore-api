'use strict';

angular.module('insight.system').controller('HeaderController',
  function ($scope, Global) {
  $scope.global = Global;

  $scope.menu = [
    {
      'title': 'Blocks',
      'link': 'blocks'
    },
    {
      'title': 'Status',
      'link': 'status'
    }
  ];

  $scope.isCollapsed = false;
});
