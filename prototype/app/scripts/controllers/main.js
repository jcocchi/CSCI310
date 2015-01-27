'use strict';

/**
 * @ngdoc function
 * @name prototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototypeApp
 */
angular.module('prototypeApp')
    .controller('MainCtrl', function($scope) {
        var applyLink = function(val, idx, array) {
            val.html = {
                onClick: 'window.location.replace("#/Songs")',
                style: 'color:black;background-color:white;'
            };
            return val;
        };
        $scope.showCloud = function() {
            var words = [{
                text: 'my',
                weight: 1
            }, {
                text: 'super',
                weight: 2
            }, {
                text: 'text',
                weight: 1
            }, {
                text: 'which',
                weight: 3
            }, {
                text: 'is',
                weight: 1
            }, {
                text: 'great',
                weight: 0.5
            }, ];
            words.map(applyLink);
            jQuery('#cloud-word')
                .jQCloud(words);
        };
    });
