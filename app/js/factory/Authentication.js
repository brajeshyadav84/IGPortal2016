
var objIG = require("../App.js");



objIG.factory('AuthFactory',['$firebaseAuth',  function($firebaseAuth) {
    
    var ref = new Firebase ("https://boiling-torch-5353.firebaseio.com/");
    return $firebaseAuth(ref);
    
}]);