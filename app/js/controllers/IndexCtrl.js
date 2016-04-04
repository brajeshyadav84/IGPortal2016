var objIG = require("../App.js");
var HttpRequest = require("../network/HttpRequest");

objIG.controller('IndexCtrl',function($scope,$location,$rootScope){

	$scope.setRedirect = function(route) {
		console.log(route);
		$location.path(route);
	};

	//redirection Function
	$rootScope.$on("redirectTo", function(route){
		$scope.redirectToScreen(route);
	});
	$scope.redirectToScreen = function(route) {
		$location.path(route);
	};


	//HttpRequest.get("'JSON/CourseOutline.json'");

})
