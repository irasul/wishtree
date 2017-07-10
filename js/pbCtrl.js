const classConfig = ['bnr','bnrThin','sqr4','sqr2','rect','full','half'];
function foto(c,url){
	this.class=c; // default to banner
	this.imgUrl = url;
	
	this.changeClass=function(){
		if(this.class>classConfig.length){
			this.class = 0;
		}
		else{
			this.class++;
		}
		
	}

	this.getClass = function(){
		return classConfig[this.class];
	}
}
var app = angular.module('blog',[]);

app.controller('pbCtrl',['$scope',function($scope){
	$scope.class=['banner',]
	$scope.fotos=[
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,''),
		new foto(0,'')
	];
}]);