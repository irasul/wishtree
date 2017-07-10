const classConfig = ['bnr','bnrThin','sqr4','sqr2','rect','full','half'];
function foto(c,url){
	this.class=c; // default to banner
	this.imgUrl = url;
	this.swapActive = false;

	this.changeClass=function(){
		if (this.swapActive) {return;}
		if(this.class>classConfig.length){
			this.class = 0;
		}
		else{
			this.class++;
		}
	}
	this.getImg = function(){
		return this.imgUrl;
	}
	this.setImg = function(url){
		this.imgUrl = url;
	}
	this.getClass = function(){
		const swp = this.swapActive?'swapActive':'';
		return swp + ' ' + classConfig[this.class];

	}
}
var app = angular.module('blog',[]);

app.controller('pbCtrl',['$scope',function($scope){
	$scope.swapActive = false;
	$scope.resetSwap = function(){
		$scope.swapfoto1 = null;
		$scope.swapfoto2 = null;
	}

	$scope.resetSwap();
	$scope.fotos=[
		new foto(0,'A.html'),
		new foto(0,'B.html'),
		new foto(0,'C.html'),
		new foto(0,'D.html'),
		new foto(0,'E.html'),
		new foto(0,'F.html'),
		new foto(0,'G.html'),
		new foto(0,'H.html'),
		new foto(0,'I.html'),
		new foto(0,'J.html'),
		new foto(0,'K.html'),
		new foto(0,'L.html'),
		new foto(0,'M.html'),
		new foto(0,'N.html'),
		new foto(0,'O.html')
	];
	$scope.swapImgs = function(){
		const tempImg= $scope.swapfoto2.getImg();
		$scope.swapfoto2.setImg(foto1.getImg());
		$scope.swapfoto1.setImg(tempImg);
	}

	$scope.setToSwap = function(f){
		if($scope.swapfoto1 == null){
			$scope.swapfoto1 = f;
			$scope.swapActive = true;
			$scope.swapfoto1.swapActive = true;
		} else if($scope.swapfoto2 == null){
			$scope.swapfoto2 = f;
			$scope.swapActive = false;
			$scope.swapfoto1.swapActive = false;
			$scope.swapImgs();
		}
	}
}]);