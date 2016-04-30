'use strict';

/* Services */

var wecareerServices = angular.module('wecareerServices', ['ngResource']);

wecareerServices
	.factory('pageService', function(){
		function GetPager(totalItems, currentPage, pageSize) {
	        // default to first page
	        currentPage = currentPage || 1;
	 
	        // default page size is 10
	        pageSize = pageSize || 5;
	 
	        // calculate total pages
	        var totalPages = Math.ceil(totalItems / pageSize);
	 
	        var startPage, endPage;
	        if (totalPages <= 10) {
	            // less than 10 total pages so show all
	            startPage = 1;
	            endPage = totalPages;
	        } else {
	            // more than 10 total pages so calculate start and end pages
	            if (currentPage <= 6) {
	                startPage = 1;
	                endPage = 10;
	            } else if (currentPage + 4 >= totalPages) {
	                startPage = totalPages - 9;
	                endPage = totalPages;
	            } else {
	                startPage = currentPage - 5;
	                endPage = currentPage + 4;
	            }
	        }
	 
	        // calculate start and end item indexes
	        var startIndex = (currentPage - 1) * pageSize;
	        var endIndex = startIndex + pageSize;
	 
	        // create an array of pages to ng-repeat in the pager control
	        var pages = [];
	        for (var i = startPage; i < endPage + 1; i++) {
	        	pages.push(i);
	        };
	 
	        // return object with all pager properties required by the view
	        return {
	            totalItems: totalItems,
	            currentPage: currentPage,
	            pageSize: pageSize,
	            totalPages: totalPages,
	            startPage: startPage,
	            endPage: endPage,
	            startIndex: startIndex,
	            endIndex: endIndex,
	            pages: pages
	        };
    	}
    	return {GetPager: GetPager}
	});
  