/**
 * Created by brajesh on 10/3/16.
 */

var objIG = require("../App.js");

objIG.controller('ForumController',['$scope', function($scope) {
	//$scope.toggle = true;
    $scope.toggle = false;
    
    //pagination concept
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.total = 30;
    $scope.textFirst = 'First';
    $scope.textLast = 'Last';
    $scope.textNext = 'Next';
    $scope.textPrev = 'Prev';
    $scope.textTitleFirst = 'First';
    $scope.textTitleLast = 'Last';
    $scope.textTitleNext = 'Next';
    $scope.textTitlePrev = 'Prev';
    $scope.showPrevNext="true";
    $scope.showFirstLast="true";
    
    $scope.onClickHandler = function(){
        console.log("onClickHandler here", $rootScope.currentPage);  
    };
     
    
}]);