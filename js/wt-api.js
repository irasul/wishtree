app.service('api',function($http){

	this.authenticate = function(request){
		return $http({
					  	url: '../api/user/auth/validate',
					  	method: 'POST',
					  	dataType : "json",
				        data: {user:request['u'],pass:request['p']},
					  });
	}

	this.getMyContracts = function(){
		/*using sample data*/
		return  [
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
						];
	}

	this.downloadPDF = function(request){
		return $http({
	  	url: '../service/getPDF.php',
	  	type: "POST",
      data: JSON.stringify({data:request}),
	  });
	}

})