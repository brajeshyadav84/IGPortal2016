
var objIG = angular.module("IG", ['ngRoute','ngSanitize','angular-carousel-3d','ezfb', 'hljs','angular-storage','ng.jsoneditor','ngMaterial', 'ngMessages','textAngular','vAccordion','ngAnimate','ui.bootstrap','firebase']);

objIG.run(function($rootScope) {
    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 27)
            $rootScope.$broadcast("escapePressed", e.target);
    });

    document.addEventListener("click", function(e) {
        $rootScope.$broadcast("documentClicked", e.target);
    });

});

objIG.config(function (ezfbProvider,storeProvider) {
    /**
     * Basic setup
     *
     * https://github.com/pc035860/angular-easyfb#configuration
     */
    // Store defaults to localStorage but we can set sessionStorage or cookieStorage.
    storeProvider.setStore('sessionStorage');

    ezfbProvider.setInitParams({
        appId: '798179366959362'
    });
})


module.exports = objIG;