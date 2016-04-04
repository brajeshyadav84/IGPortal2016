var objIG = require("../App.js");

objIG.controller('EditorCtrl',['$scope', '$http',  function($scope, $http) {
    $scope.orightml = 'welcome Test';
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = true;
}]);