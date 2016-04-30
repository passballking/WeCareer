'use strict';

/* App Module */

var WecareerApp = angular.module('WecareerApp', [
  'ngRoute',
  'wecareerControllers',
  'wecareerServices'
]);

WecareerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/jobdash', {
        templateUrl: 'partials/job-list.html',
        controller: 'JobListCtrl'
      }).
      when('/jobdash/:jobID', {
        templateUrl: 'partials/job-detail.html',
        controller: 'JobDetailCtrl'
      }).
      otherwise({
        redirectTo: '/jobdash'
      });
  }]);
