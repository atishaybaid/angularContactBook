angular.module('contactBook').controller('mainCtrl', ['$scope','data','$mdDialog',function($scope,data,$mdDialog){

$scope.name = 'atishay';



var promise =  data.getPeopleList();

promise.then(function(res){
	$scope.peopleList = res;
});

$scope.editCell = function(item,field) {
	item[field] = true;
};


$scope.checkDoneEditing = function(event,item,field){
	if(event.keyCode === 13){
		item[field] = false;
	}
};


$scope.stopEditting = function(item,field){
	item[field] = false;
};


 $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '../../addContact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: false, // Only for -xs, -sm breakpoints.
      scope:$scope
    })
    .then(function(answer) {
      
    }, function() {
 
    });
  };


	$scope.clickLisned = function(){
  		console.log("click clickLisned");
  	}

  function DialogController($scope, $mdDialog) {
  	$scope.newContact ={name:'',phone:'',address:'',fav:false};

  	$scope.saveContact = function(){
  		$scope.peopleList.push($scope.newContact);
  		$mdDialog.cancel();
  	}

  	$scope.closeDialog = function(){
  		$mdDialog.cancel();
  	};
  }
	
}])