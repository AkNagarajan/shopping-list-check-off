(function (){

	var app = angular.module('ShoppingListCheckOff',[])
	app.service('ShoppingListCheckOffService', function() {

		var toBuyArray = [{ name: "cookies", quantity: 10 },
                  		{ name: "Apple", quantity: 5 },
				  						{ name: "Orange", quantity: 9 },
				  					  { name: "Noodles", quantity: 2 },
	                    { name: "Veggie", quantity: 6 }];

		var boughtArray = [];
		this.returnToBuyArray = function () {
		        return toBuyArray;
    		}
		this.returnBoughtFunc = function (index) {
			var newObj = [{}];
			newObj = toBuyArray.splice(index, 1);
			boughtArray[boughtArray.length] = newObj[0];
			return boughtArray;
		}
		this.returnBoughtArray = function () {
					return boughtArray;
    		}
	});

	app.controller('ToBuyController',['$scope','ShoppingListCheckOffService',function($scope,ShoppingListCheckOffService){
		$scope.toBuyArray = ShoppingListCheckOffService.returnToBuyArray();
		$scope.boughtFunc = function(name,quantity,index){
			ShoppingListCheckOffService.returnBoughtFunc(index);
			if($scope.toBuyArray.length == 0){
				$scope.toBuyArrayFlag = true;
			}
		}
	}]);


	app.controller('AlreadyBoughtController',['$scope','ShoppingListCheckOffService',function($scope,ShoppingListCheckOffService){
    $scope.alreadyBought = function(){
			$scope.boughtArray = ShoppingListCheckOffService.returnBoughtArray();
			console.log("Inside AlreadyBoughtController call "+$scope.boughtArray.length);
			if($scope.boughtArray.length == 0){
				return true;
			}
			else{
				return false;
			}
	 }
		// console.log("Bought Array "+$scope.boughtArray.length);
	}]);

})();
