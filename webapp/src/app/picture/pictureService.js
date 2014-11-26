'use strict';

angular.module('picture').factory('pictureService',function($http) {
	var deerService = {
        read: function(params) {
			// https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=deer%20pictures;
			console.log('querying');
			var url = 'https://ajax.googleapis.com/ajax/services/search/images';
			
			return $http.jsonp(url, {
				params: {
					callback: 'JSON_CALLBACK',
					q: params.q,
					v: '1.0',
					format:'json',
					start: params.start,
					imgsz: 'medium',
					safe: 'moderate'
					//,rsz: '8'
				}
			});	
        }
    };
	return deerService;
});