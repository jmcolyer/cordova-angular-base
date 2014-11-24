angular.module('deer').controller('DeerCtrl',function($scope,deerService){

    $scope.read = function() {
		console.log('Loading Deer Pics');
        deerService.read().
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
	
	$scope.read();
	
});