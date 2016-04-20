app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

	//check login authentication
	$scope.login = function() {
		var data = {email : $scope.auth.email, password: $scope.auth.pass};
		$http({
		  	method: 'POST',
		  	url: 'http://rest/checkAuthentication',
		  	params: data

		}).then(function successCallback(response) {
			console.log(response.data);
		}, function errorCallback(response) {
		});
	};
}]);