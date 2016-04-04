
var objIG = require("../App.js");

objIG.directive("menu", function() {
    return {
        restrict: "E",
        template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\"}' ng-transclude></div>",
        scope: {
            visible: "=",
            alignment: "@"
        },
        transclude: true,
    };
});

objIG.directive("menuItem", function() {
    return {
        restrict: "E",
        template: "<div ng-click='navigate()' class={{classname}} ng-transclude>test</div>",
        scope: {
            hash: "@",
            classname: "@"
        },
        transclude: true,
        link: function($scope) {
            $scope.navigate = function() {
                window.location.hash = $scope.hash;
            }
        }
    }
});

