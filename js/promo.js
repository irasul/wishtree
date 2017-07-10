app.directive('promoMgr',function(){

	return{
		restrict: 'E',
		templateUrl: 'template/promo.html',
		controller: function($scope){
			$scope.showPromo = true;
			$scope.promoCode = "J20@17";
			$scope.startDate= new Date(2017,5,14,0,0);
			$scope.endDate= new Date(2017,5,20,0,0);
			$scope.now = new Date();
			$scope.isPromoActive = true;
			$scope.isPromoActive = ($scope.endDate - $scope.now)>0;		
			$scope.preparePromoEmail = function(){
				$scope.scroll('#contact');
				$scope.showPromo = false;
				$scope.email.body += 'PROMO CODE: ' +$scope.promoCode;

			}
			$scope.setShowPromo = function(){
				$scope.showPromo = true;
				$scope.scroll("body")
			}
		}

	}
});