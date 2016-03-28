angular.module('integration.monitor.controllers.app', []).controller('appCtrl', function($scope, $translate, $state, $window, $timeout) {

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
	
	// Integration management
	var monitor = {
		title : 'home',
		state : 'active',
		icon : 'iconfont',
		info : 'monitor',
		isOpen : false,
	};
	var server = {
			title : 'server',
			state : 'active',
			icon : 'iconfont',
			info : 'server',
			isOpen : false,		
		};
	
	var api = {
			title : 'api',
			state : 'active',
			icon : 'iconfont',
			info : 'api',
			isOpen : false,		
		};
	
	var database = {
			title : 'database',
			state : 'active',
			icon : 'iconfont',
			info : 'database',
			isOpen : false,		
		};
	
	var queue = {
			title : 'queue',
			state : 'active',
			icon : 'iconfont',
			info : 'queue',
			isOpen : false,		
		};
	
	var help = {
			title : 'help',
			state : 'active',
			icon : 'iconfont',
			info : 'help',
			isOpen : false,		
		};
	
	$scope.menus = [monitor,server,api,database,queue,help];
	
	$scope.stateMenuMap = {};
	
	// Construct menu map
	angular.forEach($scope.menus, function(menu, index) {
		$scope.stateMenuMap[menu.state] = menu;
//		angular.forEach(menu.subMenus, function(subMenu, key) {
//			if(subMenu.introductionState){
//				$scope.stateMenuMap[subMenu.introductionState] = menu;	
//			}
//			$scope.stateMenuMap[subMenu.state] = subMenu;
//		});
	});
	
	$scope.selectMenu = function(menu) {
		$state.go(menu.title);
	};

	$scope.containerHeight = $window.innerHeight - 100;

	angular.element($window).bind('resize', function() {
		$scope.containerHeight = $window.innerHeight - 100 < 400 ? 400 : $window.innerHeight - 100;
		$scope.$apply();
	});
});
