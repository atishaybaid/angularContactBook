angular.module('contactBook').controller('mainCtrl', ['$scope','data' ,function($scope,data){

$scope.name = 'atishay';
console.log(data);

$scope.peopleList = data.peopleList;


$scope.editCell = function(item,field) {
	console.log(item);
	item[field] = true;
}


$scope.checkDoneEditing = function(event,item,field){
	if(event.keyCode === 13){
		item[field] = false;
	}
}

	
}])