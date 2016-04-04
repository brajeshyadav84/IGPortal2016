/**
 * Created by brajesh on 7/3/16.
 */
var objIG = require("../App.js");

objIG.controller('JsonFormatterCtrl', [ '$scope', function($scope) {
	//$scope.obj = {data: json, options: { mode: 'tree' }};
	//
	//$scope.btnClick = function() {
	//	$scope.obj.options.mode = 'code'; //should switch you to code view
	//};

	//var json = [];//{"Array": [1, 2, 3], "Boolean": true, "Null": null, "Number": 123, "Object": {"a": "b", "c": "d"}, "String": "Hello World"};

	$scope.objCode = {data: {}, options: {mode: 'code'}};
	//$scope.objTree = {data: {}, options: {mode: 'tree'}};
	$scope.onLoad = function (instance) {
		//instance.expandAll();
	};
	//$scope.changeData = function () {
	//	//$scope.obj.data = {foo: 'bar'};
	//};
	$scope.changeOptions = function ($scope) {
		//$scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
		$scope.objTree = {data: $scope.objCode.data, options: {mode: 'tree'}};
	};

	//other
	//$scope.pretty = function (objCode) {
	//	return angular.toJson(objCode, true);
	//}
}]);