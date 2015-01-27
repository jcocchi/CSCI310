'use strict';

/**
 * @ngdoc overview
 * @name prototypeApp
 * @description
 * # prototypeApp
 *
 * Main module of the application.
 */
angular
  .module('prototypeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Songs', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'
      })
      .when('/Song', {
        templateUrl: 'views/song.html',
        controller: 'SongCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
