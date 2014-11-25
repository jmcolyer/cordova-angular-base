'use strict';

angular.module('picture').controller('PictureCtrl',function($scope,pictureService, $location, $anchorScroll){

    $scope.read = function() {
		console.log('Loading Pics');
		// google limits your search so we need to call multiple times
		var params = {};
				
		console.log('start index is now -> ' + $scope.start);
		
		params.start = $scope.start;
		pictureService.read(params).
			success(function(response) {
				$scope.responseData = response.responseData;
				$scope.pictures = response.responseData.results;
				//$scope.moreResultsUrl;
				console.log(response);
			}).
			error(function(response) {
				console.log('load failed');
				console.log(response);
			});
    };
	
	$scope.refresh = function() {
		console.log('Refreshing');
		$scope.read();
	};
	
	$scope.previousPage = function() {
		$scope.navigatePictures(false);
	};
	
	$scope.nextPage = function() {
		$scope.navigatePictures(true);
	};
	
	$scope.navigatePictures = function(next) {
		var pages = $scope.responseData.cursor.pages,
			currentPage = $scope.responseData.cursor.currentPageIndex,
			pageIdx, i, lastPage;
		
		for(i=0; i<pages.length; i++){
			if(i === currentPage){
				pageIdx = i;
			}
			lastPage = i;
		}

		console.log(next);
		console.log(lastPage);
		if(next){
			if(pageIdx !== lastPage){
				$scope.start = pages[pageIdx+1].start;
			}
		} else {
			if(pageIdx !== 0){
				$scope.start = pages[pageIdx-1].start;
			}
		}
		
		$scope.read();
		
		// the element you wish to scroll to.
		$location.hash('pic-container');

		// call $anchorScroll()
		$anchorScroll();
	};
	
	$scope.start = 0;
	$scope.read();
		
});