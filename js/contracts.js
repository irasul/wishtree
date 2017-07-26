app.controller('contractsCtrl',['$scope','$http',function($scope,$http){
	$scope.userContracts = [
		{
			id:'001',
			Client: 'ABC',
			EventDate: '10/10/2017',
			ContractName: 'ABC - 10/10/2017',
			Type: 'Photography'
		},
		{
			id:'002',
			Client: 'ABC',
			EventDate: '10/10/2017',
			ContractName: 'ABC - 10/10/2017',
			Type: 'Cinematography'
		},
		{
			id:'003',
			Client: 'ABC',
			EventDate: '5/1/2018',
			ContractName: 'ABC - 5/1/2018',
			Type: 'Photography'
		},
		{
			id:'004',
			Client: 'ABC',
			EventDate: '5/1/2018',
			ContractName: 'ABC - 5/1/2018',
			Type: 'Cinematography'
		},
	]

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

function DownloadCtrl($scope,$http){
	this.download = function(){

		const contract = $scope.ctrl.contract;
		const request = {'contractId': contract.id};
	  const promise = $http({
	  	url: '../service/getPDF.php',
	  	type: "POST",
      data: JSON.stringify({data:request}),
	  });

	  promise.then(function(response){
	  	alert("start downloading "+contract.ContractName + '-'+contract.Type);
	  });
	}
}