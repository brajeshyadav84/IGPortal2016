
var objIG = angular.module("IG", ['ngRoute','ngSanitize','angular-carousel-3d','angular-storage','ng.jsoneditor','ngMaterial', 'ngMessages','textAngular','vAccordion','ngAnimate','ui.bootstrap','firebase']);

objIG.run(function($rootScope) {
    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 27)
            $rootScope.$broadcast("escapePressed", e.target);
    });

    document.addEventListener("click", function(e) {
        $rootScope.$broadcast("documentClicked", e.target);
    });

});

module.exports = objIG;