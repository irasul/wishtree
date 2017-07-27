app.controller('contractsCtrl',['$scope','$http','packages','api',function($scope,$http,packages,api){

	$scope.userContracts = api.getMyContracts();
	$scope.contractTypes = packages.getAllContractTypes();
	$scope.showModal = false;
	$scope.newClientFormView = false;
	$scope.newContractFormView = false;
	$scope.pass1 = "asdasdas";
	$scope.pass2 = "1221asdasd";

}]);

app.directive('downloadContract',function(){
	return{
		restrict: 'A',
		controller: DownloadCtrl,
		controllerAs: 'ctrl',
		scope:{
			contract:"="
		},
		bindToController: true,
	  link: (scope, ele, attr) => {
      ele.on('click', function(e){
        scope.ctrl.download();
      });
	  }
	}
})

app.directive('createClient',function(){
	return{
		restrict: 'A',
		controller: createClientCtrl,
		controllerAs: 'ctrl',
		scope:{
			contract:"="
		},
		bindToController: true,
	  link: (scope, ele, attr) => {
      ele.on('click', function(e){
        scope.ctrl.create();
      });
	  }
	}
})


app.directive('createContract',function(){
	return{
		restrict: 'A',
		controller: createContractCtrl,
		controllerAs: 'ctrl',
		scope:{
			newContract:"="
		},
		bindToController: true,
	  link: (scope, ele, attr) => {
      ele.on('click', function(e){
        scope.ctrl.create();
      });
	  }
	}
})

app.directive('newClientForm',function(){
	return {
		restrict: 'E',
		templateUrl: '../template/newClient.html',
		controller: modalClientCtrl,
		controllerAs:'ctrl',
	}
});


app.directive('newContractForm',function(){
	return {
		restrict: 'E',
		templateUrl: '../template/newContract.html',
		controller: modalContractCtrl,
		controllerAs:'ctrl'
	}
});

function modalClientCtrl($scope,api){
	this.scope = $scope;
	
	this.dismiss = function(){
		this.scope.showModal = false;
		this.scope.newClientFormView = false;
	}
	this.saveItem - function(){
		if(this.scope.pass1 !== this.scope.pass2){

		}
		else{
			const request = {name:this.scope.clientName,pass:this.scope.pass1};	
			const clientSavePromise = api.saveClient(request);
		}
	}	
}

function modalContractCtrl($scope,api){
	this.scope = $scope;
	this.dismiss = function(){
		this.scope.showModal = false;
		this.scope.newContractFormView = false;
	}
	this.saveItem - function(){
		//const request = {name:this.scope.contractName,pass:this.scope.pass1};	
		//const contractSavePromise = api.saveContract(request);
	}
}



function DownloadCtrl($scope,$http,api){
	this.download = function(){

		const contract = $scope.ctrl.contract;
		const request = {'contractId': contract.id};
	  const promise = api.downloadPDF(request);

	  promise.then(function(response){
	  	alert("start downloading "+contract.ContractName + '-'+contract.Type);
	  });
	}
}

function createClientCtrl($scope,$http){
	this.create = function(){
		$scope.$parent.showModal = true;
		$scope.$parent.newClientFormView = true;
		$scope.$parent.$apply();

	}
}
function createContractCtrl($scope,$http){
	this.create = function(){
		$scope.$parent.showModal = true;
		$scope.$parent.newContractFormView = true;
		$scope.$parent.$apply();
	}

}

