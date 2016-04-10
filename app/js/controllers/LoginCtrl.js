
var objIG = require("../App.js");

objIG.controller('LinkedINCtrl',['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
	//$scope.getLinkedInData = function() {
	//	if(!$scope.hasOwnProperty("userprofile")){
	//		IN.API.Profile("me").fields(
	//			[ "id", "firstName", "lastName", "pictureUrl",
	//				"publicProfileUrl" ]).result(function(result) {
	//			// set the model
	//			$rootScope.$apply(function() {
	//				var userprofile =result.values[0];
	//				$rootScope.userprofile = userprofile;
	//				$rootScope.loggedUser = true;
	//				//go to main
	//				//$location.path("/main");
	//				console.log(userprofile);
	//			});
	//		}).error(function(err) {
	//			$scope.error = err;
	//		});
	//	}
	//};
	////logout and go to login screen
	//$scope.logoutLinkedIn = function() {
	//	//retrieve values from LinkedIn
	//	IN.User.logout();
	//	delete $rootScope.userprofile;
	//	$rootScope.loggedUser = false;
	//	//$location.path("/login");
	//};
	//
	////LinkedIn functions
	////Execute on load profile
	//$scope.onLinkedInLoad =function () {
	//	IN.Event.on(IN, "auth", function() {
	//		onLinkedInLogin();
	//	});
	//	IN.Event.on(IN, "logout", function() {
	//		onLinkedInLogout();
	//	});
	//}
	//
	////execute on logout event
	//$scope.onLinkedInLogout = function () {
	//	//location.reload(true);
	//}
	//
	////execute on login event
	//$scope.onLinkedInLogin = function () {
	//	console.log("onLinkedInLogin execute");
	//	// pass user info to angular
	//	//angular.element(document.getElementById("appBody")).scope().$apply(
	//	//	function($scope) {
	//			$scope.getLinkedInData();
	//	//	}
	//	//);
	//}

}]);

