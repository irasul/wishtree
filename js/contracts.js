app.controller('ContractsCtrl',['$scope','$http','packages','api',function($scope,$http,packages,api){

	$scope.userContracts = api.getMyContracts();
	$scope.contractTypes = packages.getAllContractTypes();
	$scope.showModal = false;
	$scope.newClientFormView = false;
	$scope.newContractFormView = false;
}]);
/*app.controller('ClinetFormCtrl', ['$scope','$http',function($scope,$http){
	$scope.pass1 = "asdasdas";
	$scope.pass2 = "1221asdasd";
	$scope.dismiss = function(){
		this.scope.showModal = false;
		$scope.newClientFormView = false;	
	}
}]);

app.controller('ContractFormCtrl', ['$scope','$http',function($scope,$http){
	
	$scope.dismiss = function(){
		$scope.newContractFormView = false;	
	}
}]);

*/
app.directive('downloadContract',function(){
	return{
		restrict: 'A',
		controller: DownloadCtrl,
		controllerAs: 'ctrlDL',
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
		controllerAs: 'ctrlClient',
		scope:{
			contract:"="
		},
		bindToController: true,
	  link: (scope, ele, attr) => {
      ele.on('click', function(e){
        scope.ctrlClient.create();
      });
	  }
	}
})


app.directive('createContract',function(){
	return{
		restrict: 'A',
		controller: createContractCtrl,
		controllerAs: 'ctrlContract',
		bindToController: true,
	  link: (scope, ele, attr) => {
      ele.on('click', function(e){
        scope.ctrlContract.create();
      });
	  }
	}
})

app.directive('newClientForm',function(){
	return {
		restrict: 'E',
		templateUrl: '../template/newClient.html',
		controller: modalClientCtrl,
		controllerAs: "ctrl1"
	}
});


app.directive('newContractForm',function(){
	return {
		restrict: 'E',
		templateUrl: '../template/newContract.html',
		controller: modalContractCtrl,
		controllerAs: "ctrl2",

	}
});

function modalClientCtrl($scope,api){
	this.scope = $scope;
	
	this.dismiss = function(){
		this.scope.showModal = false;
		this.scope.newClientFormView = false;
	}
	this.saveClient - function(){
		if(this.scope.pass1 !== this.scope.pass2){
			return;
		}
		else{
			const request = {
				name:this.scope.clientName,
				email:this.scope.email,
				pass:this.scope.pass1
			};	
			const clientSavePromise = api.saveClient(request);
			clientSavePromise.then(function(){
				this.dismiss();
				alert('saved');
			})

		}
	}	
}

function modalContractCtrl($scope,api){
	this.scope = $scope;
	this.activeDay = 0;
	this.clientList = api.getClients();
	this.contract = {
		'client':"",
		'id':"",
		'days':[
							{'day':"",'stime':"",'etime':"",'venue':"" },
							{'day':"",'stime':"",'etime':"",'venue':"" },
							{'day':"",'stime':"",'etime':"",'venue':"" }
		],
		'details': '',
		'notes':'',
		'price': 0.00,
		'initPayment': 0.00,
		'dueAmount': 0.00
	}

	this.updateDueAmount = function(){
		this.contract.dueAmount = this.contract.price - this.contract.initPayment;
	}
	this.dismiss = function(){
		this.scope.showModal = false;
		this.scope.newContractFormView = false;
	}
	this.saveContract = function(){
		const request = this.contract;	
		const contractSavePromise = api.saveContract(request);
	}
}



function DownloadCtrl($scope,$http,api){
	this.download = function(){

		const contract = $scope.ctrlDL.contract;
		const request = {'contractId': contract.id};
	  const promise = api.downloadPDF(request);

	  promise.then(function(response){
	  	alert("start downloading "+contract.ContractName + '-'+contract.Type);
	  });
	}
}

function createClientCtrl($scope){
	this.create = function(){
		$scope.$parent.showModal = true;
		$scope.$parent.newClientFormView = true;
		$scope.$parent.$apply();

	}
}
function createContractCtrl($scope,packages){
	this.create = function(){
		$scope.ctrl2.contract.details = packages.getPackageDetailsById($scope.cn.id);
		$scope.ctrl2.contract.id = $scope.cn.id;
		$scope.$parent.showModal = true;
		$scope.$parent.newContractFormView = true;
		$scope.$apply();
	}

}

