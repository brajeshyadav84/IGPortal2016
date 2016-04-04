
var objIG = require("../App.js");

objIG.controller('ChatRoomCtrl',['$scope', '$sce',  function($scope, $sce) {
    $scope.chatURL = "https://gitter.im/brajeshyadav84/";
    $scope.currentChatURL = $sce.trustAsResourceUrl($scope.chatURL);
    
    //$("#profile-region").hide();
    
}]);