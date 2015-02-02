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
            title: 'We Are The Champions',
            count: 503,
        }, {
            title: 'Bohemian Rhapsody',
            count: 50,
        }, {
            title: 'Don\'t Stop Me Now',
            count: 5,
        }, {
            title: 'We Will Rock You',
            count: 3,
        }, {
            title: 'Another One Bites The Dust',
            count: 1,
        }, ];
    });
