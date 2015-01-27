'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:SongCtrl
 * @description
 * # SongCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
  .controller('SongCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
