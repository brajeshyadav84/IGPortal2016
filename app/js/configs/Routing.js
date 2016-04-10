var objIG = require("../App.js");

objIG.config(function($routeProvider,$locationProvider,$logProvider){
	//$routeProvider.
	//    when('/home',{template:'Hi Home'}).
	//    when('/about',{template:'Hi About'}).
	//    otherwise({redirectTo:'/Contact',template:'Hi Brajesh Default page'})
	$logProvider.debugEnabled(true);

	$routeProvider.
	when('/WelcomeIG',
		{
			templateUrl:"screens/ui/CourseContent.html",
			controller:'',
		}).
    when('/Innovation',
		{
			templateUrl:"screens/ui/TakeUserIdea.html",
			controller:'',

		}).
	when('/Login',
		{
			templateUrl:"screens/ui/Login.html",
			controller:'',

		}).
    when('/ProjectSuggestion',
		{
			templateUrl:"screens/userAccount/ProjectSuggestion.html",
			controller:'',

		}).
    when('/Account',
		{
			templateUrl:"screens/userAccount/Account.html",
			controller:'',

		}).
    when('/ChangePassword',
		{
			templateUrl:"screens/userAccount/ChangePassword.html",
			controller:'',

		}).
    when('/Registration',
		{
			templateUrl:"screens/userAccount/Registration.html",
			controller:'',

		}).
    when('/ForgetPassword',
		{
			templateUrl:"screens/userAccount/ForgetPassword.html",
			controller:'',

		}).
    when('/RaiseQuery',
		{
			templateUrl:"screens/userAccount/RaiseQuery.html",
			controller:'',

		}).
    when('/ShareFeedback',
		{
			templateUrl:"screens/userAccount/ShareFeedback.html",
			controller:'',

		}).
	when('/Course/:CourseID/:RequestedTab',
		{
			templateUrl:"screens/ui/CourseDetails.html",
			controller:''
		}).
	when('/JsonFormatter',
		{
			templateUrl:"screens/endUser/JsonFormatter.html",
			controller:'',

		}).
	when('/ForumHome',
		{
			templateUrl:"screens/Forum/ForumHome.html",
			controller:'',

		}).
	when('/ForumDescription',
		{
			templateUrl:"screens/Forum/ForumTopicDescription.html",
			controller:'',

		}).
	when('/ForumTopics',
		{
			templateUrl:"screens/Forum/ForumTopics.html",
			controller:'',

		}).
    when('/ManageForum',
		{
			templateUrl:"screens/Forum/ManageForum.html",
			controller:'',

		}).
	when('/Jobs',
		{
			templateUrl:"screens/endUser/jobsWalkins.html",
			controller:'',

		}).
	when('/ResumeBuilder',
		{
			templateUrl:"screens/endUser/ResumeBuilder.html",
			controller:'',

		}).
	when('/HRPrepration',
		{
			templateUrl:"screens/endUser/HRPrepration.html",
			controller:'',

		}).
	when('/OnlineEvents',
		{
			templateUrl:"screens/event/EventDisplay.html",
			controller:'',

		}).
	when('/ContactUs',
		{
			templateUrl:"screens/endUser/Contact.html",
			controller:'',
	
		}).
    when('/AboutUs',
		{
			templateUrl:"screens/endUser/About.html",
			controller:'',
	
		}).
    when('/ChatRoom',
		{
			templateUrl:"screens/component/ChatRoom.html",
			controller:'',
	
		}).
    when('/DeveloperTalk/:Id',
		{
			templateUrl:"screens/component/DeveloperTalk.html",
			controller:'',
	
		}).
    when('/ProjectList',
		{
			templateUrl:"screens/endUser/ProjectIdea.html",
			controller:'',
	
		}).
	//when('/UserProfile',
	//	{
	//		templateUrl:"Views/User/UserProfile.html",
	//		controller:'userProfileController',
	//
	//	}).
	//when('/Course/:CourseID/:RequestedTab',
	//	{
	//		templateUrl:"Views/User/UserCourseDisplay.html",
	//		controller:'userCourseDisplayController',
	//
	//	}).
	otherwise({redirectTo:'/WelcomeIG',templateUrl:"screens/ui/CourseContent.html"});

	//$locationProvider.html5Mode(true);
});