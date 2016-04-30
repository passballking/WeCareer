'use strict';

/* Controllers */

var wecareerControllers = angular.module('wecareerControllers', []);

wecareerControllers.controller('JobListCtrl', ['$scope', '$http', '$filter', '$location','pageService',
  function($scope, $http, $filter, $location,pageService) {
    //get searched items
    $http.get('jobs/aa.json').success(function(data) {
      $scope.jobs = data.jobs;
      $scope.items = data.jobs;
      $scope.search = search;

      $scope.pager = {};
      $scope.go = function(obj) {
        var path = '/jobdash/' + $scope.currentItems[obj].jobID;
        $location.url(path);
      };
      $scope.setPage = setPage;
      initController();

      function setPage(page){
     //   alert(page);
        if (page < 1 || page > $scope.pager.totalPages) {
              return null;
          }
          // get pager object from service
          $scope.pager = pageService.GetPager($scope.items.length, page);
          // get current page of items
          $scope.currentItems = $scope.items.slice($scope.pager.startIndex, $scope.pager.endIndex);
      }

      function initController() {
          // initialize to page 1
          $scope.setPage(1);
      }

      function search(query) {
        $scope.pager = {};
        $scope.items = $filter('filter')($scope.jobs, query);
        $scope.setPage(1); 
        console.log($scope.items.length);
      }
    });
  }])

.controller('JobDetailCtrl', ['$scope', '$routeParams', '$http',
 function($scope, $routeParams, $http) {
    $http.get('jobs/' + $routeParams.jobID + '.json').success(function(data) {
      $scope.job = data;
    });
  }]);
