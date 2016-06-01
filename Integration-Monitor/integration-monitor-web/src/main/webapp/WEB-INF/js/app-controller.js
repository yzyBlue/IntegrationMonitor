angular.module('integration.monitor.controllers.app', []).controller('appCtrl', function($scope, $translate, $state, $window, $element,$timeout,authenticationService) {

	$scope.isAuthenticated = false;
	$scope.$watch(function() {
		return authenticationService.isAuthenticated();
	}, function(newValue) {
		$scope.isAuthenticated = newValue;
	});
	
	$scope.selectLanguage = function(key) {
		$translate.use(key);
	};

	$scope.getCurrentLanguage = function() {
		var language = $translate.use();
		if (language == 'zh') {
			return 'LANGUAGE_ZH';
		} else if (language == 'en') {
			return 'LANGUAGE_EN';
		}
	};
	

	$scope.containerHeight = $window.innerHeight - 100;

	angular.element($window).bind('resize', function() {
		$scope.containerHeight = $window.innerHeight - 100 < 400 ? 400 : $window.innerHeight - 100;
		$scope.$apply();
	});
	

	
});
