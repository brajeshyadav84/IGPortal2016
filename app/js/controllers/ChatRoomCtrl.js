
var objIG = require("../App.js");

objIG.controller('ChatRoomCtrl',['$scope', '$sce','$http',  function($scope, $sce, $http) {
    
    $http.get('../JSON/ChatRoom.json')
		.then(function(res){
			$scope.ChatRoomList = res.data.ChatRoom;
            console.log($scope.ChatRoomList);
	});
    
}]);