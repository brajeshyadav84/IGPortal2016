var Promise = require('es6-promise').Promise;
var IGUrl = require("../configs/IGUrl");
var Constant = require("../configs/Constant");

var HttpRequest = {

	//prepareURL: function (customURL) {
	//	var url = customURL.replace('+', '/').replace('+', '/').replace('+', '/').replace('+', '/');
	//	return url;
	//},
	//
	//request: function(method, methodName, params, headers, resolve, reject) {
	//	var self = this;
	//	var url = IGUrl.DOMAIN;
	//	if ((url.substring(0, 4) == "http") || (url.substring(0, 4) == "https")) {
	//		url = self.prepareURL(url + methodName + params);
	//	} else {
	//		url = self.prepareURL(IGUrl.PROTOCOL + url + methodName + params);
	//	}
	//	return url;
	//},

	get: function (url) {
		$http.get(url)
			.then(function(res){
				console.log(res);
				//$scope.courseDetails = res.data.courseDetails;
				//$scope.GlobalcourseDetails = res.data.courseDetails;
		});
	},

};

module.exports = HttpRequest;