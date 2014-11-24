angular.module('deer').factory('deerService',function($http) {
	var deerService = {
        read: function( queryString ) {
			// https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=deer%20pictures;
			console.log('querying');
			var url = "https://ajax.googleapis.com/ajax/services/search/images";
			
			return $http.jsonp(url, {
				params: {
					callback: 'JSON_CALLBACK',
					q: 'deer pictures',
					v: '1.0',
					format:'json',
					start: 0,
					num: 20
				}
			});	
        }
    };
	return deerService;
});