app.controller('showcaseCtrl',['$scope','gallerySvc',function($scope,gallerySvc){

	$scope.closeGallery = function(){
		$('#artboard').slideUp();
	}

	$scope.scrollToElem = function(id){
		const offset = ($(id).offset().top+300);
		$('html,body').animate({scrollTop:offset});
	}

	$scope.setCat = function(a){
		gallerySvc.setActiveGallery(a);
		$scope.setShowcaseGallery = gallerySvc.getPics();
		$scope.activeGalleryTtle = gallerySvc.getTitle();
		$scope.scrollToElem('#showcase');
		$('#artboard').slideDown();


	}

	$scope.setPhotoVideo = function(index){
		$scope.showcase=index;
		$scope.$apply()
	}
}])