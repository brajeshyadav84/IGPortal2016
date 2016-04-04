
var objIG = require("../App.js");

objIG.controller('CarouselCtrl',['$scope', '$http', '$filter',  function($scope, $http, $filter) {

	$http.get('../JSON/CourseOutline.json')
		.then(function(res){
			$scope.courseDetails = res.data.courseDetails;
			$scope.selectedCourseDetails = res.data.courseDetails[0];
			$scope.slides2 = res.data.courseDetails;
	});

	$scope.options2 = {
		visible: 5,
		perspective: 35,
		startSlide: 0,
		border: 0,
		dir: 'ltr',
		width: 360,
		height: 270,
		space: 220,
		controls: true
	};

	//$scope.slides2 = [
	//	{'Id':'IG01', 'Image': '#2a6496', title: 'First', description:'testing', isVideo:'', isTutorial:'',idForum:''},
	//	{'Id':'IG02', 'Image': '#000000', title: 'Second', description:'testing', isVideo:'', isTutorial:'',idForum:''},
	//	{'Id':'IG03', 'Image': '#ffcc41', title: 'Third', description:'testing', isVideo:'', isTutorial:'',idForum:''},
	//	{'Id':'IG04', 'Image': '#445fac', title: 'fourth', description:'testing', isVideo:'', isTutorial:'',idForum:''},
	//	{'Id':'IG02', 'Image': '#442BF3', title: 'fifth', description:'testing', isVideo:'', isTutorial:'',idForum:''}
	//];

	$scope.lastSlide = function (index) {
		//$log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
	}

	$scope.beforeChange = function (index) {
		//$log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
	}

	$scope.selectedClick = function (index) {
		//$log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
		//$scope.selectedCourseDetails = jQuery.grep($scope.selectedCourseDetails, function( a ) {
		//	return a.Id == index;
		//});
		console.log("brajesh selectedClick");
	}

	$scope.slideChanged = function (index) {
		//$log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
		console.log("brajesh slideChanged");
		//setTimeout(function () {
	        $scope.$apply(function () {
	            $scope.selectedCourseDetails = $scope.courseDetails[index];
	        });
	    //}, 2000);
	    //$scope.$digest();
		console.log($scope.selectedCourseDetails);
	}

}]);