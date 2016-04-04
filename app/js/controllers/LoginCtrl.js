
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

objIG.controller('FBCtrl', function($scope, ezfb, $rootScope,store) {

	updateLoginStatus(updateApiMe);

	$scope.login = function () {
		/**
		 * Calling FB.login with required permissions specified
		 * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
		 */
		ezfb.login(function (res) {
			/**
			 * no manual $scope.$apply, I got that handled
			 */
			if (res.authResponse) {
				updateLoginStatus(updateApiMe);
				$rootScope.$emit("redirectTo", 'Welcome');
			}
		}, {scope: 'email,user_likes,publish_actions'});
		//console.log($rootScope.UserDetails);
	};

	$rootScope.$on("callLogout", function(){
		$scope.logout();
	});

	$scope.logout = function () {
		/**
		 * Calling FB.logout
		 * https://developers.facebook.com/docs/reference/javascript/FB.logout
		 */
		ezfb.logout(function () {
			updateLoginStatus();
		});
	};


	$rootScope.$on("callFBShare", function(){
		$scope.share();
	});
	$scope.share = function () {
		ezfb.ui(
			{
				method: 'feed',
				name: 'Interview Gully',
				picture: 'http://plnkr.co/img/plunker.png',
				link: 'http://plnkr.co/edit/qclqht?p=preview',
				description: 'Learn Share and Grow'
			},
			function (res) {
				// res: FB.ui response
			}
		);
	};

	/**
	 * For generating better looking JSON results
	 */
	var autoToJSON = ['loginStatus', 'apiMe'];
	angular.forEach(autoToJSON, function (varName) {
		$scope.$watch(varName, function (val) {
			$scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
		}, true);
	});

	/**
	 * Update loginStatus result
	 */
	function updateLoginStatus (more) {
		ezfb.getLoginStatus(function (res) {
			$scope.loginStatus = res;

			(more || angular.noop)();
		});
	}

	/**
	 * Update api('/me') result
	 */
	function updateApiMe () {
		ezfb.api('/me?fields=id,name,picture,cover', function (res) {
			if(!res.error) {
				$scope.apiMe = res;
				$rootScope.UserDetails = {
					name: res.name,
					id: res.id,
					picture: res.picture.data.url,
					cover: res.cover.source,
					isLogin : true
				}
			} else {
				$rootScope.UserDetails = {
					name: '',
					id: '',
					picture: '',
					cover: '',
					isLogin : false
				}
			}
			// This will be saved in sessionStorage as obj
			store.set('user', $rootScope.UserDetails);

		});
	}
});