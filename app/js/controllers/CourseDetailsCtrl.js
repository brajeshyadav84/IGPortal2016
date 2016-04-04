/**
 * Created by brajesh on 6/3/16.
 */

var objIG = require("../App.js");

objIG.controller('CourseDetailsCtrl',['$scope','$routeParams','$http', '$filter', '$sce', function($scope, $routeParams, $http, $filter, $sce) {

	$scope.RequestedTab = $routeParams.RequestedTab;
	$scope.CourseID = $routeParams.CourseID;
	console.log($routeParams);

	$http.get('../JSON/CourseOutline.json')
		.then(function(res){
			$scope.courseDetails1 = $scope.GlobalcourseDetails1 = res.data.courseDetails;
			setHeadlines($scope.courseDetails1);
	});

	function setHeadlines(data){
		var colheading = $filter('filter')(data, {Id: $scope.CourseID})[0];
		$scope.headingList = colheading.Outline;
		$scope.logo = colheading.Image;
	}
	$scope.dataDisplay = "";
	$scope.viewDisplay = function(id){
		$scope.videoLink = "";
		$scope.dataDisplay = $filter('filter')($scope.headingList, {Id: id})[0];console.log($scope.dataDisplay);
		$scope.videoLink = $sce.trustAsResourceUrl($scope.dataDisplay.vLink);
	}
	$scope.tabDisplay = function(tabId){
		openTab = tabId;
		for(var i = 1 ; i<=4; i++){
			$("#"+i).hide();
		}
		switch (openTab) {
			case "1":
				$("#"+openTab).show();
				break;
			case "2":
				$("#"+openTab).show();
				break;
			case "3":
				$("#"+openTab).show();
				break;

		}
	}
	// Requested tab open
	var reqTab = "myTab";
	var openTab = "";
	switch ($scope.RequestedTab) {
		case 'file':
			reqTab = reqTab + '1';
			openTab = "1";
			$scope.tabDisplay(openTab);
			break;
		case 'video':
			reqTab = reqTab + '2';
			openTab = "2";
			$scope.tabDisplay(openTab);
			break;
		case 'articles':
			reqTab = reqTab + '3';
			openTab = "3";
			$scope.tabDisplay(openTab);
			break;
		default:
			reqTab = reqTab + '1';
			$scope.tabDisplay(openTab);
	}
	$('#'+reqTab).addClass('active');

//dynamic add CSS color to LI in Slider on hover
	$(".dropdownmenu  li").hover(function () {
		$("#menu li").removeClass('selectedLi');
		selectedLink.css("background-color", "#ffffff");
		$(this).addClass('hovered');
	});


//dynamic add CSS color on LI when mouseout
	$(".dropdownmenu  li").mouseout(function () {
		$(this).removeClass('hovered');
		selectedLink.addClass('selectedLi');

	});
	var selectedLink = $('#linkover');
	var opened = false;
//function for opening left menu bar and display menu links
	openStaticMenu();

//function call to load overview page as defualt page
	//loadcaseStudies();

//event to open left menu and expand right panel
	$('.navbtnplace').click(function () {
		if (opened) {
			openStaticMenu();
		}
		else {
			closeStaticMenu();
		}
		opened = opened ? false : true;
	});


//redirect to home page
	//$scope.redirectHomeClick = function () {
	//    $state.transitionTo(CONFIG.PAGE_NAME.homePage);
	//};
	/*function for opening left menu bar */
	function openStaticMenu() {

		$('.homebtn').animate({ width: "150px" });
		$('.homebtntext').show();
		//$('.homebtntext').animate({ width: "100px" });
		$('.popupcontent').animate({ width: "150px" });
		$('.dropdownmenu').animate({ width: "185px" });
		//$('.navbtnplace').animate({ left: "-35px" });
		$('.removebtn').animate({ left: "-35px" });
		$('.dropdownmenu').show();
		$('.closebtn').show();
		$('.openbtn').hide();
		$('.dropdownmenu ul li').show();
		$('.menubtn').css('display', 'none');
		$('.menubtn2').css('display', 'block');


	}

	/*function for closing left menu bar */
	function closeStaticMenu() {
		$('.homebtn').animate({ width: "35px" });
		//$('.homebtntext').animate({ width: "0px" });
		$('.dropdownmenu').animate({ width: "35px" });
		$('.popupcontent').animate({ width: "35px" });
		$('.navbtnplace').animate({ left: "0px" });
		$('.removebtn').animate({ left: "0px" });
		$('.homebtntext').hide();
		$('.dropdownmenu').hide();
		$('.closebtn').hide();
		$('.openbtn').show();
		$('.dropdownmenu ul li').hide();
	}

}]);