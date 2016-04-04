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