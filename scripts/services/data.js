angular.module('contactBook').service('data',['$http',function($http){

	this.getPeopleList = function(){

		return $http({
				method:'GET',
				url:'/sample.json'
				}).then(function(res){
					return res.data.data;
				})

	}
}])