'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:SongsCtrl
 * @description
 * # SongsCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
    .controller('SongsCtrl', function($scope) {
        $scope.songs = [{
            title: 'One hell of a title',
            count: 503,
        }, {
            title: 'One hell of a title 2',
            count: 5,
        }, {
            title: 'One hell of a title 3',
            count: 50,
        }, {
            title: 'One hell of a title 4',
            count: 3,
        }, {
            title: 'One hell of a title 5',
            count: 1,
        }, ];
    });
