
var objIG = require("../App.js");

objIG.controller('ChatRoomCtrl',['$scope', '$sce', '$http', '$routeParams', '$filter',  function($scope, $sce, $http, $routeParams, $filter) {
    
    $http.get('../JSON/ChatRoom.json')
		.then(function(res){
			$scope.ChatRoomList = res.data.ChatRoom;
	});
    
    $scope.routeChatRoom = function(id){
        var routeId = "DeveloperTalk/" + id ;
        $scope.setRedirect(routeId);
    };
    
    if($routeParams.Id != undefined){
        $http.get('../JSON/ChatRoom.json')
		.then(function(res){
			var result = $filter('filter')(res.data.ChatRoom, {Id:$routeParams.Id})[0];
            console.log(result.url);
            $scope.RequestedUrl = $sce.trustAsResourceUrl(result.url);//$routeParams.ChatUrl;
	    });
    }
    
    
    
}]);

