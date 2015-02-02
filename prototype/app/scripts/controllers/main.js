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
        // We are the champions, my friends
        // And well keep on fighting...till the end
        // We are the champions, We are the champions
        // No time
        // for losers cause we are the champions...
        // Of the world
        $scope.showCloud = function() {
            var words = [{
                text: 'Champions',
                weight: 1
            }, {
                text: 'friends',
                weight: 2
            }, {
                text: 'time',
                weight: 1
            }, {
                text: 'we',
                weight: 3
            }, {
                text: 'are',
                weight: 1
            }, {
                text: 'losers',
                weight: 0.5
            }, {
                text: 'world',
                weight: 0.5
            }, {
                text: 'keep',
                weight: 0.5
            }, {
                text: 'on',
                weight: 0.5
            }, {
                text: 'fighting',
                weight: 0.5
            }, ];
            words.map(applyLink);
            jQuery('#cloud-word')
                .jQCloud(words);
        };
    });
