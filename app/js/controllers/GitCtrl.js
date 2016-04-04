
var objIG = require("../App.js");



objIG.controller('GitCtrl',['$scope', '$sce','AuthFactory',  function($scope, $sce, AuthFactory) {
    
    $scope.login = function (){
        AuthFactory.$authWithOAuthPopup("github").then(function(authData){
            console.log("Brajesh github authData::");
            console.log(authData);
        }).catch(function(error){
            console.log("Brajesh error::");
            console.log(error);
        })
    }
    
    $scope.logout = function(){
        AuthFactory.$unauth();
    }
    
}]);