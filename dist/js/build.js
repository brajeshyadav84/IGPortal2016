(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var objIG = angular.module("IG", ['ngRoute','ngSanitize','angular-carousel-3d','ezfb', 'hljs','angular-storage']);

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
},{}],2:[function(require,module,exports){
var Promise = require('es6-promise').Promise;
var IGUrl = require("../configs/IGUrl");
var Constant = require("../configs/Constant");

var HttpRequest = {

	prepareURL: function (customURL) {
		var url = customURL.replace('+', '/').replace('+', '/').replace('+', '/').replace('+', '/');
		return url;
	},

	request: function(method, methodName, params, headers, resolve, reject) {
		var self = this;
		var url = IGUrl.DOMAIN;
		if ((url.substring(0, 4) == "http") || (url.substring(0, 4) == "https")) {
			url = self.prepareURL(url + methodName + params);
		} else {
			url = self.prepareURL(IGUrl.PROTOCOL + url + methodName + params);
		}
		return url;
	},

	get: function (url) {
		$http.get(url)
			.then(function(res){
				$scope.courseDetails = res.data.courseDetails;
				$scope.GlobalcourseDetails = res.data.courseDetails;
		});
	},

	//post: function (method, methodName) {
	//	var self = this;
	//	return new Promise(function (resolve, reject) {
	//		var method = "POST";
	//		self.request(method, methodName, params, headers, resolve, reject);
	//	});
	//},
	//
	//encrypt: function () {
	//
	//}

};

module.exports = HttpRequest;
},{"../configs/Constant":3,"../configs/IGUrl":4,"es6-promise":19}],3:[function(require,module,exports){
var Constant = {

};

module.exports = Constant;
},{}],4:[function(require,module,exports){
var Urls = {
	PROTOCOL: 'http',
	DOMAIN: 'www.interviewgully.com',
	SUB_DOMAIN:'',
};

module.exports = Urls;
},{}],5:[function(require,module,exports){
var objIG = require("../App.js");

objIG.config(function($routeProvider,$locationProvider,$logProvider){
	//$routeProvider.
	//    when('/home',{template:'Hi Home'}).
	//    when('/about',{template:'Hi About'}).
	//    otherwise({redirectTo:'/Contact',template:'Hi Brajesh Default page'})
	$logProvider.debugEnabled(true);

	$routeProvider.
	when('/Welcome',
		{
			templateUrl:"screens/UI/courseContent.html",
			controller:'',

		}).
	when('/Login',
		{
			templateUrl:"screens/component/Login.html",
			controller:'',

		}).
	//when('/AboutUS',
	//	{
	//		templateUrl:"Views/aboutUS.html",
	//		controller:'aboutUSController',
	//
	//	}).
	//when('/User',
	//	{
	//		templateUrl:"Views/User/UserHome.html",
	//		controller:'homeController',
	//
	//	}).
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
	otherwise({redirectTo:'/Welcome',templateUrl:"screens/component/Carousel.html"});

	//$locationProvider.html5Mode(true);
});
},{"../App.js":1}],6:[function(require,module,exports){

var objIG = require("../App.js");

objIG.controller('CarouselCtrl',['$scope',  function($scope) {

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

	$scope.slides2 = [
		{'bg': '#2a6496', caption: 'First'},
		{'bg': '#000000', caption: 'Second '},
		{'bg': '#ffcc41', caption: 'Third'},
		{'bg': '#445fac', caption: 'fourth'},
		{'bg': '#442BF3', caption: 'fifth'}
	];

	$scope.lastSlide = function (index) {
		//$log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
	}

	$scope.beforeChange = function (index) {
		//$log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
	}

	$scope.selectedClick = function (index) {
		//$log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
	}

	$scope.slideChanged = function (index) {
		//$log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
	}


}]);
},{"../App.js":1}],7:[function(require,module,exports){
var objIG = require("../App.js");

objIG.controller('IndexCtrl',function($scope,$location,$rootScope){

	$scope.setRedirect = function(route) {
		$location.path(route);
	};

	//redirection Function
	$rootScope.$on("redirectTo", function(route){
		$scope.redirectToScreen(route);
	});
	$scope.redirectToScreen = function(route) {
		$location.path(route);
	};

})

},{"../App.js":1}],8:[function(require,module,exports){

var objIG = require("../App.js");

objIG.controller('LinkedINCtrl',['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
	//$scope.getLinkedInData = function() {
	//	if(!$scope.hasOwnProperty("userprofile")){
	//		IN.API.Profile("me").fields(
	//			[ "id", "firstName", "lastName", "pictureUrl",
	//				"publicProfileUrl" ]).result(function(result) {
	//			// set the model
	//			$rootScope.$apply(function() {
	//				var userprofile =result.values[0];
	//				$rootScope.userprofile = userprofile;
	//				$rootScope.loggedUser = true;
	//				//go to main
	//				//$location.path("/main");
	//				console.log(userprofile);
	//			});
	//		}).error(function(err) {
	//			$scope.error = err;
	//		});
	//	}
	//};
	////logout and go to login screen
	//$scope.logoutLinkedIn = function() {
	//	//retrieve values from LinkedIn
	//	IN.User.logout();
	//	delete $rootScope.userprofile;
	//	$rootScope.loggedUser = false;
	//	//$location.path("/login");
	//};
	//
	////LinkedIn functions
	////Execute on load profile
	//$scope.onLinkedInLoad =function () {
	//	IN.Event.on(IN, "auth", function() {
	//		onLinkedInLogin();
	//	});
	//	IN.Event.on(IN, "logout", function() {
	//		onLinkedInLogout();
	//	});
	//}
	//
	////execute on logout event
	//$scope.onLinkedInLogout = function () {
	//	//location.reload(true);
	//}
	//
	////execute on login event
	//$scope.onLinkedInLogin = function () {
	//	console.log("onLinkedInLogin execute");
	//	// pass user info to angular
	//	//angular.element(document.getElementById("appBody")).scope().$apply(
	//	//	function($scope) {
	//			$scope.getLinkedInData();
	//	//	}
	//	//);
	//}

}]);

objIG.controller('FBCtrl', function($scope, ezfb, $rootScope,store) {

	updateLoginStatus(updateApiMe);

	$scope.login = function () {
		/**
		 * Calling FB.login with required permissions specified
		 * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
		 */
		ezfb.login(function (res) {
			/**
			 * no manual $scope.$apply, I got that handled
			 */
			if (res.authResponse) {
				updateLoginStatus(updateApiMe);
				$rootScope.$emit("redirectTo", 'Welcome');
			}
		}, {scope: 'email,user_likes,publish_actions'});
		//console.log($rootScope.UserDetails);
	};

	$rootScope.$on("callLogout", function(){
		$scope.logout();
	});

	$scope.logout = function () {
		/**
		 * Calling FB.logout
		 * https://developers.facebook.com/docs/reference/javascript/FB.logout
		 */
		ezfb.logout(function () {
			updateLoginStatus();
		});
	};


	$rootScope.$on("callFBShare", function(){
		$scope.share();
	});
	$scope.share = function () {
		ezfb.ui(
			{
				method: 'feed',
				name: 'Interview Gully',
				picture: 'http://plnkr.co/img/plunker.png',
				link: 'http://plnkr.co/edit/qclqht?p=preview',
				description: 'Learn Share and Grow'
			},
			function (res) {
				// res: FB.ui response
			}
		);
	};

	/**
	 * For generating better looking JSON results
	 */
	var autoToJSON = ['loginStatus', 'apiMe'];
	angular.forEach(autoToJSON, function (varName) {
		$scope.$watch(varName, function (val) {
			$scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
		}, true);
	});

	/**
	 * Update loginStatus result
	 */
	function updateLoginStatus (more) {
		ezfb.getLoginStatus(function (res) {
			$scope.loginStatus = res;

			(more || angular.noop)();
		});
	}

	/**
	 * Update api('/me') result
	 */
	function updateApiMe () {
		ezfb.api('/me?fields=id,name,picture,cover', function (res) {
			if(!res.error) {
				$scope.apiMe = res;
				$rootScope.UserDetails = {
					name: res.name,
					id: res.id,
					picture: res.picture.data.url,
					cover: res.cover.source,
					isLogin : true
				}
			} else {
				$rootScope.UserDetails = {
					name: '',
					id: '',
					picture: '',
					cover: '',
					isLogin : false
				}
			}
			// This will be saved in sessionStorage as obj
			store.set('user', $rootScope.UserDetails);

		});
	}
});
},{"../App.js":1}],9:[function(require,module,exports){
var objIG = require("../App.js");

objIG.controller('MenuCtrl',['$scope', '$rootScope','store', function($scope, $rootScope,store) {
    $scope.leftVisible = false;
    $scope.rightVisible = false;

    $scope.close = function() {
        $scope.leftVisible = false;
        $scope.rightVisible = false;
    };

    $scope.showRightMenu = function() {
        $rootScope.UserDetails = store.get('user');
        console.log("Brajesh Kumar");
        console.log(store.get('user'));

        if($rootScope.UserDetails === undefined || $rootScope.UserDetails === null){return (false);}
        return ($rootScope.UserDetails.isLogin);
    };

    $scope.showLeft = function(e) {
        $scope.leftVisible = true;
        e.stopPropagation();
    };

    $scope.showRight = function(e) {
        $scope.rightVisible = true;

        //$scope.logoPicture = $rootScope.UserDetails.picture;
        //$scope.coverPicture = $rootScope.UserDetails.cover;
        //$scope.fullName = $rootScope.UserDetails.name;

        e.stopPropagation();
    }

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
        $scope.$apply(function() {
            $scope.close();
        });
    }
    //Logout
    $scope.logout = function() {
        $rootScope.UserDetails = {
            name: '',
            id: '',
            picture: '',
            cover: '',
            isLogin : false
        }
        // This will be saved in sessionStorage as obj
        store.set('user', $rootScope.UserDetails);

        $rootScope.$emit("callLogout", {});
        $rootScope.$emit("redirectTo", 'Welcome');
    }

    $scope.shareOnFB = function() {
        $rootScope.$emit("callFBShare", {});
    }

}]);
},{"../App.js":1}],10:[function(require,module,exports){


},{}],11:[function(require,module,exports){

},{}],12:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],13:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],14:[function(require,module,exports){

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


},{"../App.js":1}],15:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],16:[function(require,module,exports){
(function(window, angular, undefined) {

  'use strict';

  /* global -ngSwipe */

  var ngSwipe = angular.module('swipe', []);

  ngSwipe.factory('swipe', [ function() {

    var MOVE_BUFFER_RADIUS = 40;
    var MAX_RATIO = 0.3;

    var POINTER_EVENTS = {
      'mouse': {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup'
      },
      'touch': {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend',
        cancel: 'touchcancel'
      }
    };

    function getCoordinates(event) {
      var originalEvent = event.originalEvent || event;
      var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
      var e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];

      return {
        x: e.clientX,
        y: e.clientY
      };
    }

    function getEvents(pointerTypes, eventType) {
      var res = [];
      angular.forEach(pointerTypes, function(pointerType) {
        var eventName = POINTER_EVENTS[pointerType][eventType];
        if (eventName) {
          res.push(eventName);
        }
      });
      return res.join(' ');
    }

    return {

      bind: function(element, eventHandlers, pointerTypes) {

        // Absolute total movement
        var totalX, totalY;
        // Coordinates of the start position.
        var startCoords;
        var lastPos;
        // Whether a swipe is active.
        var active = false;
        // Decide where we are going
        var isDecided = false;
        var isVertical = true;

        pointerTypes = pointerTypes || ['mouse', 'touch'];

        element.on(getEvents(pointerTypes, 'start'), function(event) {
          startCoords = getCoordinates(event);
          active = true;
          totalX = 0;
          totalY = 0;
          isDecided = false;
          isVertical = true;
          lastPos = startCoords;
          eventHandlers['start'] && eventHandlers['start'](startCoords, event);
        });

        element.on(getEvents(pointerTypes, 'cancel'), function(event) {
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
        });

        element.on(getEvents(pointerTypes, 'move'), function(event) {

          if (! active) {
            return;
          }

          if (! startCoords) {
            return;
          }

          var coords = getCoordinates(event);

          totalX += Math.abs(coords.x - lastPos.x);
          totalY += Math.abs(coords.y - lastPos.y);

          lastPos = coords;

          if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
            return;
          } else {
            if (! isDecided){

              var deltaX, deltaY, ratio;

              deltaX = Math.abs(coords.x - startCoords.x);
              deltaY = Math.abs(coords.y - startCoords.y);

              ratio = deltaY / deltaX;

              if (ratio < MAX_RATIO){
                event.preventDefault();
                isVertical = false;
              } else {
                isVertical = true;
              }

              isDecided = true;
            }
          }

          event.isVertical = isVertical;
          eventHandlers['move'] && eventHandlers['move'](coords, event);
        });

        element.on(getEvents(pointerTypes, 'end'), function(event) {
          if (! active){
            return;
          }
          event.isVertical = isVertical;
          active = false;
          eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
        });
      }
    };
  }]);

  function makeSwipeDirective(directiveName, direction, axis, eventName) {
    ngSwipe.directive(directiveName, ['$parse', 'swipe', function($parse, swipe) {

      var MAX_OTHER_AXIS_DISTANCE = 75;
      var MAX_RATIO = 0.3;
      var MIN_DISTANCE = 30;

      return function(scope, element, attr) {

        var swipeHandler = $parse(attr[directiveName]);

        var startCoords, valid;

        function validSwipe(coords) {

          if (! startCoords || ! valid){
            return false;
          }

          var deltaY = (coords.y - startCoords.y) * direction;
          var deltaX = (coords.x - startCoords.x) * direction;

          if (! axis){  // horizontal swipe
            return Math.abs(deltaY) < MAX_OTHER_AXIS_DISTANCE &&
              deltaX > 0 &&
              deltaX > MIN_DISTANCE &&
              Math.abs(deltaY) / deltaX < MAX_RATIO;
          } else {  // vertical swipe
            return Math.abs(deltaX) < MAX_OTHER_AXIS_DISTANCE &&
              deltaY > 0 &&
              deltaY > MIN_DISTANCE &&
              Math.abs(deltaX) / deltaY < MAX_RATIO;
          }

        }

        var pointerTypes = ['touch'];

        if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
          pointerTypes.push('mouse');
        }

        swipe.bind(element, {
          'start': function(coords, event) {
            var className = event.target.getAttribute('class');
            if (axis && (! className || className && className.match('noPreventDefault') === null)) {
              event.preventDefault();
            }
            startCoords = coords;
            valid = true;
          },
          'cancel': function() {
            valid = false;
          },
          'end': function(coords, event) {
            if (validSwipe(coords)) {
              scope.$apply(function() {
                element.triggerHandler(eventName);
                swipeHandler(scope, { $event: event });
              });
            }
          }
        }, pointerTypes);
      };
    }]);
  }

  // avoid conflicts with ngTouch module

  try {
    angular.module('ngTouch');
  } catch(err) {
    makeSwipeDirective('ngSwipeLeft', -1, false, 'swipeleft');
    makeSwipeDirective('ngSwipeRight', 1, false, 'swiperight');
  }

  // left is negative x-coordinate, right is positive

  makeSwipeDirective('ngSwipeUp', -1, true, 'swipeup');
  makeSwipeDirective('ngSwipeDown', 1, true, 'swipedown');

})(window, window.angular);

},{}],17:[function(require,module,exports){
/*!
 * Name: angular-carousel-3d
 * GIT Page: https://github.com/Wlada/angular-carousel-3d
 * Version: 0.1.0 - 2016-01-17T19:35:10.888Z
 * License: MIT
 */


(function () {
    'use strict';

    angular
        .module('angular-carousel-3d', [
            'swipe' 
        ]);


})();
(function () {
    'use strict';

    angular
        .module('angular-carousel-3d')
        .directive('carousel3dSlide', carousel3dSlide);

    // ==
    // == Directive 3d
    carousel3dSlide.$inject = [];

    // == HTML rendering directive
    function carousel3dSlide() {
        var carousel3dSlide = {
            require: '^carousel3d',
            restrict: 'AE',
            template: '<div class=\"slide-3d\" ng-click=\"carousel3d.slideClicked($index)\" ng-swipe-left=\"carousel3d.goPrev()\" ng-swipe-right=\"carousel3d.goNext()\" ng-transclude></div>',
            replace: true,
            transclude: true,
            link: linkFunc
        };

        // ==
        // == Directive link
        // ========================================
        function linkFunc(scope, element, attrs, ctrl, transclude) {
            scope.carousel3d = ctrl;
        }

        return carousel3dSlide;
    }
})();

(function () {
    'use strict';

    angular
        .module('angular-carousel-3d')
        .controller('Carousel3dController', Carousel3dController);

    // ==
    // == Directive Controller
    // ========================================
    Carousel3dController.$inject = ['$scope', '$element', '$attrs', '$timeout', '$log', '$window', 'Carousel3dService'];

    function Carousel3dController($scope, $element, $attrs, $timeout, $log, $window, Carousel3dService) {
        var vm = this;

        vm.isLoading = true;
        vm.isSuccessful = false;
        vm.isRendered = false;
        vm.percentLoaded = 0;

        vm.slideClicked = slideClicked;
        vm.goPrev = goPrev;
        vm.goNext = goNext;

        var $wrapper = null,
            $slides = [],
            carousel3d = {};

        // == Watch changes on model and options object
        $scope.$watch('[vm.model, vm.options]', init, true);

        function init() {
            Carousel3dService
                .build(vm.model, vm.options)
                .then(
                    function handleResolve(carousel) {

                        carousel3d = carousel;

                        vm.slides = carousel3d.slides;
                        vm.controls = carousel3d.controls;
                        vm.isLoading = false;
                        vm.isSuccessful = true;

                        var outerHeight = carousel3d.getOuterHeight(),
                            outerWidth = carousel3d.getOuterWidth();

                        $element.css({'height': outerHeight + 'px'});

                        $timeout(function () {

                            $wrapper = angular.element($element[0].querySelector('.carousel-3d'));
                            $wrapper.css({'width': outerWidth + 'px', 'height': outerHeight + 'px'});
                            $slides = $wrapper.children();

                            render();
                        });

                    },
                    // == Preloaded images reject  handler
                    function handleReject(carousel) {

                        $element.css({'height': carousel.getOuterHeight() + 'px'});

                        vm.isLoading = false;
                        vm.isSuccessful = false;
                    },
                    // == Preloaded images notify handler which is executed multiple times during preload
                    function handleNotify(event) {
                        vm.percentLoaded = event.percent;
                    }
                );

        }

        function render(animate, speedTime) {
            carousel3d.setSlides();

            var outerHeight = carousel3d.getOuterHeight(),
                outerWidth = carousel3d.getOuterWidth(),
                slideTop = (carousel3d.topSpace === "auto") ? 0 : ((outerHeight / 2) - (outerHeight / 2)),
                slideLeft = ((carousel3d.width / 2) - (outerWidth / 2)),
                speed = (speedTime) ? (speedTime / 1000) : (carousel3d.animationSpeed / 1000),
                zIndex = 999;

            // == Set other slides styles
            angular.forEach(carousel3d.slides, function (slide, index) {
                var css = {
                    position: 'absolute',
                    opacity: 0,
                    visibility: 'hidden',
                    overflow: 'hidden',
                    top: slideTop + 'px',
                    'border-width': carousel3d.border + 'px',
                    width: outerWidth,
                    height: outerHeight
                };

                if (animate) {
                    angular.extend(css, {
                        '-webkit-transition': "all " + speed + "s ",
                        '-moz-transition': "all " + speed + "s ",
                        '-o-transition': "all " + speed + "s ",
                        '-ms-transition': "all " + speed + "s ",
                        'transition': "all " + speed + "s "
                    });
                }

                getSlide(index).css(css);
            });

            // == Set first slide styles
            getSlide(carousel3d.currentIndex)
                .addClass('current')
                .css({
                    zIndex: zIndex,
                    opacity: 1,
                    visibility: 'visible',
                    '-webkit-transform': 'none',
                    '-moz-transform': 'none',
                    '-o-transform': 'none',
                    '-ms-transform': 'none',
                    'transform': 'none',
                    left: slideLeft + 'px',
                    top: slideTop + 'px',
                    width: outerWidth + "px",
                    height: outerHeight + "px"
                });

            angular.forEach(carousel3d.rightSlides, function (slide, index) {
                var css = setCss(index, zIndex, true);

                zIndex -= index + 1;

                getSlide(slide)
                    .css(css)
                    .css({
                        opacity: 1,
                        visibility: 'visible',
                        zIndex: zIndex,
                        width: outerWidth + "px",
                        height: outerHeight + "px"
                    });
            });

            angular.forEach(carousel3d.leftSlides, function (slide, index) {
                var css = setCss(index, zIndex);

                zIndex -= index + 1;

                getSlide(slide)
                    .css(css)
                    .css({
                        opacity: 1,
                        visibility: 'visible',
                        zIndex: zIndex,
                        width: outerWidth + "px",
                        height: outerHeight + "px"
                    });
            });

            if (carousel3d.total > carousel3d.visible) {

                var rCSS = setCss(carousel3d.rightSlides.length - 1, carousel3d.rightSlides.length - 1, true),
                    lCSS = setCss(carousel3d.leftSlides.length - 1, carousel3d.leftSlides.length - 1);

                getSlide(carousel3d.rightOutSlide).css(rCSS);
                getSlide(carousel3d.leftOutSlide).css(lCSS);
            }

            vm.isRendered = true;
        }

        function setCss(i, zIndex, positive) {

            var leftRemain = (carousel3d.space == "auto") ? parseInt((i + 1) * (carousel3d.width / 1.5)) : parseInt((i + 1) * (carousel3d.space)),
                transform = (positive) ?
                            'translateX(' + (leftRemain) + 'px) translateZ(-' + (carousel3d.inverseScaling + ((i + 1) * 100)) + 'px) rotateY(-' + carousel3d.perspective + 'deg)' :
                            'translateX(-' + (leftRemain) + 'px) translateZ(-' + (carousel3d.inverseScaling + ((i + 1) * 100)) + 'px) rotateY(' + carousel3d.perspective + 'deg)',
                left = "0%",
                top = (carousel3d.topSpace === "auto") ? "none" : parseInt((i + 1) * (carousel3d.space)),
                width = "none",
                height = "none",
                overflow = "visible";

            return {
                '-webkit-transform': transform,
                '-moz-transform': transform,
                '-o-transform': transform,
                '-ms-transform': transform,
                'transform': transform,
                left: left,
                top: top,
                width: width,
                height: height,
                zIndex: zIndex,
                overflow: overflow
            };
        }

        function goSlide(index, motionless, farchange) {

            if (angular.isFunction(vm.onBeforeChange)) {
                vm.onBeforeChange({
                    index: carousel3d.currentIndex
                });
            }

            carousel3d.setCurrentIndex((index < 0 || index > carousel3d.total - 1) ? 0 : index);

            if (carousel3d.isLastSlide()) {

                if (angular.isFunction(vm.onLastSlide)) {
                    vm.onLastSlide({
                        index: carousel3d.currentIndex
                    });
                }
            }

            angular.forEach($slides, function (slide, index) {
                angular.element($slides[index]).removeClass('current');
            });

            carousel3d.setLock(true);

            render(true, carousel3d.animationSpeed);

            $timeout(function () {
                animationEnd();
            }, carousel3d.animationSpeed);

            return farchange;
        }

        function goNext(farchange) {

            farchange = (farchange) ? farchange : false;

            if (!farchange && carousel3d.getLock()) {
                return false;
            }

            if (carousel3d.isLastSlide()) {
                goSlide(0, false, farchange);

            } else {
                goSlide(carousel3d.currentIndex + 1, false, farchange);
            }

            return false;
        }

        function goPrev(farchange) {

            farchange = (farchange) ? farchange : false;

            if (!farchange && carousel3d.getLock()) {
                return false;
            }

            if (carousel3d.isFirstSlide()) {
                goSlide(carousel3d.total - 1, false, farchange);

            } else {
                goSlide(carousel3d.currentIndex - 1, false, farchange);
            }

            return false;
        }

        function goFar(index) {
            var diff = (index === carousel3d.total - 1 && carousel3d.isFirstSlide()) ? -1 : (index - carousel3d.currentIndex);

            if (carousel3d.isLastSlide() && index === 0) {
                diff = 1;
            }

            var diff2 = (diff < 0) ? -diff : diff,
                timeBuff = 0;

            for (var i = 0; i < diff2; i++) {
                var timeout = (diff2 === 1) ? 0 : (timeBuff);

                $timeout(function () {
                    (diff < 0) ? goPrev(diff2) : goNext(diff2);
                }, timeout);

                timeBuff += (carousel3d.animationSpeed / (diff2));
            }
        }

        function animationEnd() {
            carousel3d.setLock(false);

            if (vm.onSlideChange) {
                vm.onSlideChange({
                    index: carousel3d.currentIndex
                });
            }
        }

        function getSlide(index) {
            return (index >= 0) ? angular.element($slides[index]) : angular.element($slides[carousel3d.total + index]);
        }

        function slideClicked(index) {

            if (carousel3d.currentIndex != index) {
                goFar(index);

            } else {
                if (vm.onSelectedClick) {
                    vm.onSelectedClick({
                        index: carousel3d.currentIndex
                    });
                }
            }
        }
    }

})();
(function () {
    'use strict';

    angular
        .module('angular-carousel-3d')
        .directive('carousel3d', carousel3d);


    // ==
    // == Directive 3d
    carousel3d.$inject = ['$timeout'];

    function carousel3d($timeout) {

        var carousel3d = {
            restrict: 'AE',
            template: '' +
            '<div class=\"carousel-3d-container\" ng-switch="vm.isLoading">' +
            '   <div class="carousel-3d-loader" ng-switch-when=\"true\">' +
            '       <div class=\"carousel-3d-loader-circle\" style=\"-webkit-transform:scale(0.75)\"><div><div></div><div></div></div></div>' +
            '       <div class="carousel-3d-loader-percentage">{{ vm.percentLoaded }}</div>' +
            '   </div>' +
            '   <div ng-switch-when="false" ng-switch="vm.isSuccessful">' +
            '       <div class=\"carousel-3d\" ng-switch-when=\"true\" ng-show="vm.isRendered" ng-transclude>' +
            '       </div>' +
            '       <p ng-switch-when=\"false\" class="carousel-3d-loader-error">There was a problem during load</p>' +
            '       <div ng-if="vm.controls" class="carousel-3d-controls">' +
            '           <div class="carousel-3d-next arrow-left" ng-click=\"vm.goPrev()\"></div>' +
            '           <div class="carousel-3d-prev arrow-right" ng-click=\"vm.goNext()\"></div>' +
            '       </div>' +
            '   </div>' +
            '</div>',
            replace: true,
            scope: {
                model: '=ngModel',
                options: '=',
                onSelectedClick: '&',
                onSlideChange: '&',
                onLastSlide: '&',
                onBeforeChange: '&'
            },
            controller: 'Carousel3dController as vm',
            bindToController: true,
            transclude: true,
            compile: compileFunc,
            link: linkFunc
        };

        // ==
        // == Directive Compile
        // =======================================
        //compileFunc.$inject = ['element', 'attributes', '$attrs'];

        function compileFunc(element, attributes) {

            return (linkFunc);
        }

        // ==
        // == Directive link
        // ========================================

        function linkFunc(scope, element, attrs, ctrl, transclude) {
        }

        return carousel3d;
    }

})();
(function () {
    'use strict';

    angular
        .module('angular-carousel-3d')
        .factory("Carousel3dService", Carousel3dService);

    // ==
    // == Directive Service
    // ========================================
    Carousel3dService.$inject = ['$rootScope', '$q', '$log'];

    function Carousel3dService($rootScope, $q, $log) {

        function Carousel3d(slides, params) {
            this.slides = slides || [];
            this.leftSlides = [];
            this.rightSlides = [];
            this.leftOutSlide = '';
            this.rightOutSlide = '';
            this.loadCount = 0;
            this.errorCount = 0;
            this.states = {
                PENDING: 1,
                LOADING: 2,
                RESOLVED: 3,
                REJECTED: 4
            };
            this.total = this.slides.length;
            this.currentIndex = 0;
            this.lock = false;
            this.sourceProp = params.sourceProp;
            this.visible = params.visible || 5;
            this.perspective = params.perspective || 35;
            this.animationSpeed = params.animationSpeed || 500;
            this.dir = params.dir || 'ltr';
            this.width = params.width || 360;
            this.height = params.height || 270;
            this.border = params.border || 0;
            this.space = params.space || 'auto';
            this.topSpace = params.topSpace || 'auto';
            this.controls = params.controls || false;
            this.startSlide = params.startSlide || 0;
            this.inverseScaling = params.inverseScaling || 300;
            this.state = this.states.PENDING;
            this.deferred = $q.defer();
            this.promise = this.deferred.promise;
        }

        // == Public Service methods
        // ========================================

        Carousel3d.build = function (model, params) {
            var carousel = new Carousel3d(model, params || {});

            return carousel.load().promise.then(function () {
                carousel.visible = (carousel.visible > carousel.total) ? carousel.total : carousel.visible;

                carousel.currentIndex = carousel.startSlide > carousel.total - 1 ? carousel.total - 1 : params.startSlide;

                try {
                    if (carousel.visible !== 2) {
                        carousel.visible = (carousel.visible % 2) ? carousel.visible : carousel.visible - 1;
                    }

                } catch (error) {
                    $log.error(error);
                }

                return carousel;
            });

        };

        // == Private Service methods
        // ========================================

        var proto = {
            constructor: Carousel3d,
            isInitiated: isInitiated,
            isRejected: isRejected,
            isResolved: isResolved,
            load: load,
            handleImageError: handleImageError,
            handleImageLoad: handleImageLoad,
            loadImageLocation: loadImageLocation,
            getTotalNumber: getTotalNumber,
            setStartSlide: setStartSlide,
            getSlides: getSlides,
            setSlides: setSlides,
            setCurrentIndex: setCurrentIndex,
            getOuterWidth: getOuterWidth,
            getOuterHeight: getOuterHeight,
            setLock: setLock,
            getLock: getLock,
            isLastSlide: isLastSlide,
            isFirstSlide: isFirstSlide,
            getSourceProp: getSourceProp
        };

        function isInitiated() {
            return ( this.state !== this.states.PENDING );
        }

        function isRejected() {
            return ( this.state === this.states.REJECTED );
        }

        function isResolved() {
            return ( this.state === this.states.RESOLVED );
        }

        function load() {

            if (this.isInitiated()) {
                return this;
            }


            this.state = this.states.LOADING;

            if (!this.sourceProp) {
                this.deferred.resolve(this);

            } else {
                for (var i = 0; i < this.total; i++) {
                    this.loadImageLocation(this.slides[i]);
                }
            }


            return this;
        }

        function handleImageError(imageLocation) {
            this.errorCount++;

            if (this.isRejected()) {
                return;
            }

            this.state = this.states.REJECTED;
            this.deferred.reject(this);
        }

        function handleImageLoad(imageLocation) {
            this.loadCount++;

            if (this.isRejected()) {
                return;
            }

            this.deferred.notify({
                percent: Math.ceil(this.loadCount / this.total * 100),
                imageLocation: imageLocation
            });

            if (this.loadCount === this.total) {
                this.state = this.states.RESOLVED;


                this.deferred.resolve(this);
            }
        }

        function loadImageLocation(imageLocation) {

            var carousel = this,
                image = new Image();

            image.onload = function (event) {
                $rootScope.$apply(function () {
                        carousel.handleImageLoad(event.target.src);
                        image = event = null;
                    }
                );

            };
            image.onerror = function (event) {
                $rootScope.$apply(function () {
                        carousel.handleImageError(event.target.src);
                        image = event = null;
                    }
                );
            };
            image.src = imageLocation[this.sourceProp];
        }

        function getTotalNumber() {
            return this.total;
        }

        function setStartSlide(index) {
            this.startSlide = (index < 0 || index > this.total) ? 0 : index;
        }

        function setCurrentIndex(index) {
            return this.currentIndex = index;
        }

        function getOuterWidth() {
            return parseInt(this.width + this.border);
        }

        function getOuterHeight() {
            return parseInt(this.height + this.border, 10);
        }

        function setLock(value) {
            return this.lock = value;
        }

        function getLock() {
            return this.lock;
        }

        function getSlides() {
            return this.slides;
        }

        function setSlides() {
            var num = Math.floor(this.visible / 2) + 1,
                dir = 'ltr';

            this.leftSlides = [];
            this.rightSlides = [];

            for (var m = 1; m < num; m++) {
                var eq1 = (this.dir === dir) ? (this.currentIndex + m) % (this.total) : (this.currentIndex - m) % (this.total),
                    eq2 = (this.dir === dir) ? (this.currentIndex - m) % (this.total) : (this.currentIndex + m) % (this.total);

                this.leftSlides.push(eq1);
                this.rightSlides.push(eq2);
            }

            var rightOut = this.leftOutSlide = (this.currentIndex - num),
                leftOut = this.rightOutSlide = ((this.total - this.currentIndex - num) <= 0) ? (-parseInt(this.total - this.currentIndex - num)) : (this.currentIndex + num);

            if (this.dir === dir) {
                this.leftOutSlide = rightOut;
                this.rightOutSlide = leftOut;
            }

            return this.slides;
        }

        function isLastSlide() {
            return this.currentIndex === this.total - 1;
        }

        function isFirstSlide() {
            return this.currentIndex === 0;
        }

        function getSourceProp() {
            return this.sourceProp;
        }

        angular.extend(Carousel3d.prototype, proto);

        return ( Carousel3d );
    }
})();
},{}],18:[function(require,module,exports){
/* PDFObject, copyright (C) 2008 Philip Hutchison (pipwerks.com). Documentation and examples are at www.pdfobject.com. Version 1.2, April 2011. MIT style license */
var PDFObject=function(y){if(!y||!y.url){return false;}var w="1.2",b=y.id||false,i=y.width||"100%",z=y.height||"100%",r=y.pdfOpenParams,a,x;var v=function(){var c=null;if(window.ActiveXObject){c=new ActiveXObject("AcroPDF.PDF");if(!c){c=new ActiveXObject("PDF.PdfCtrl");}if(c!==null){return true;}}return false;};var u=function(){var c,f=navigator.plugins,d=f.length,e=/Adobe Reader|Adobe PDF|Acrobat/gi;for(c=0;c<d;c++){if(e.test(f[c].name)){return true;}}return false;};var t=function(){var c=navigator.mimeTypes["application/pdf"];return(c&&c.enabledPlugin);};var s=function(){var c=null;if(u()||v()){c="Adobe";}else{if(t()){c="generic";}}return c;};var q=function(){var e=document.getElementsByTagName("html");if(!e){return false;}var c=e[0].style,d=document.body.style;c.height="100%";c.overflow="hidden";d.margin="0";d.padding="0";d.height="100%";d.overflow="hidden";};var p=function(d){var c="",e;if(!d){return c;}for(e in d){if(d.hasOwnProperty(e)){c+=e+"=";if(e==="search"){c+=encodeURI(d[e]);}else{c+=d[e];}c+="&";}}return c.slice(0,c.length-1);};var o=function(d){var c=null;switch(d){case"url":c=a;break;case"id":c=b;break;case"width":c=i;break;case"height":c=z;break;case"pdfOpenParams":c=r;break;case"pluginTypeFound":c=x;break;case"pdfobjectversion":c=w;break;}return c;};var n=function(d){if(!x){return false;}var c=null;if(d){c=(d.nodeType&&d.nodeType===1)?d:document.getElementById(d);if(!c){return false;}}else{c=document.body;q();i="100%";z="100%";}c.innerHTML='<object	data="'+a+'" type="application/pdf" width="'+i+'" height="'+z+'"></object>';return c.getElementsByTagName("object")[0];};a=encodeURI(y.url)+"#"+p(r);x=s();this.get=function(c){return o(c);};this.embed=function(c){return n(c);};return this;};
},{}],19:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.1.2
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$vertxNext;
    var lib$es6$promise$asap$$customSchedulerFn;

    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        if (lib$es6$promise$asap$$customSchedulerFn) {
          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
        } else {
          lib$es6$promise$asap$$scheduleFlush();
        }
      }
    }

    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
    }

    function lib$es6$promise$asap$$setAsap(asapFn) {
      lib$es6$promise$asap$$asap = asapFn;
    }

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // see https://github.com/cujojs/when/issues/410 for details
      return function() {
        process.nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertx() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }
    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
      var parent = this;
      var state = parent._state;

      if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
        return this;
      }

      var child = new this.constructor(lib$es6$promise$$internal$$noop);
      var result = parent._result;

      if (state) {
        var callback = arguments[state - 1];
        lib$es6$promise$asap$$asap(function(){
          lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
        });
      } else {
        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
      }

      return child;
    }
    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFulfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$asap(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
      if (maybeThenable.constructor === promise.constructor &&
          then === lib$es6$promise$then$$default &&
          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise's eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: lib$es6$promise$then$$default,

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      this._instanceConstructor = Constructor;
      this.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (Array.isArray(input)) {
        this._input     = input;
        this.length     = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate();
          if (this._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(this.promise, this._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var length  = this.length;
      var input   = this._input;

      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        this._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var c = this._instanceConstructor;
      var resolve = c.resolve;

      if (resolve === lib$es6$promise$promise$resolve$$default) {
        var then = lib$es6$promise$$internal$$getThen(entry);

        if (then === lib$es6$promise$then$$default &&
            entry._state !== lib$es6$promise$$internal$$PENDING) {
          this._settledAt(entry._state, i, entry._result);
        } else if (typeof then !== 'function') {
          this._remaining--;
          this._result[i] = entry;
        } else if (c === lib$es6$promise$promise$$default) {
          var promise = new c(lib$es6$promise$$internal$$noop);
          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
          this._willSettleAt(promise, i);
        } else {
          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
        }
      } else {
        this._willSettleAt(resolve(entry), i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var promise = this.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        this._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          this._result[i] = value;
        }
      }

      if (this._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, this._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":20}],20:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);
