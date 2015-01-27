'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:SongsCtrl
 * @description
 * # SongsCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
  .controller('SongsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
