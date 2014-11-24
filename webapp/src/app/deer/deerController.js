angular.module('deer').controller('DeerCtrl',function($scope,deerService){

    $scope.read = function() {
		console.log('Loading Deer Pics');
		// google limits your search so we need to call multiple times
		var params = {};
		
		params.start = $scope.index;
		deerService.read(params).
			success(function(response) {
				$scope.deers = response.responseData.results;
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
	}
	
	$scope.previousPage = function() {
		if($scope.index === 0){  // do nothing 
			return;
		}
		$scope.index = $scope.index - 1;
		console.log('going to previous page ' + $scope.index);
		$scope.read();
	};
	
	$scope.nextPage = function() {
		$scope.index = $scope.index + 1;
		console.log('going to next page ' + $scope.index);
		$scope.read();
	}
	
	$scope.index = 0;
	$scope.read();
	
});