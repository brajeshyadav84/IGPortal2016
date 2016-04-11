var objIG = require("../App.js");

objIG.controller('EventCtrl',['$scope', '$location', '$rootScope', '$http', function($scope,$location,$rootScope,$http) {
    var colHRQuestion = [];
    $http.get('../JSON/OnlineEvent.json')
		.then(function(res){
            colEvents = res.data.Events;
			$scope.panesA = colEvents;
	});
    
	$scope.expandCallback = function (index, id) {
        console.log('expand:', index, id);
      };

    $scope.collapseCallback = function (index, id) {
        console.log('collapse:', index, id);
      };

    $scope.$on('accordionA:onReady', function () {
        console.log('accordionA is ready!');
    });
    
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