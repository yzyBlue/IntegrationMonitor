angular.module('integration.monitor.controllers',['integration.monitor.controllers.app']);
angular.module('integration.monitor.i18n', ['integration.monitor.i18n.zh','integration.monitor.i18n.en' ]);
angular.module(
		'inteMonitorApp',
		['toaster','pascalprecht.translate','integration.monitor.i18n','integration.monitor.controllers']).config(
		function($stateProvider, $urlRouterProvider, $translateProvider,
				$controllerProvider, $compileProvider, $filterProvider,
				$provide) {
			
			define('lazyLoader', function() {
		        return {
		            controller: $controllerProvider.register,
		            directive: $compileProvider.directive,
		            filter: $filterProvider.register,
		            factory: $provide.factory,
		            service: $provide.service
		        };
		    });
			
			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data|mias-iv|mias-cpoe|shine):/);
			
		    // UI router config
		    $urlRouterProvider.otherwise('/');
			
		    $stateProvider.state('home', {
	            url: '/',
	            templateUrl: 'js/views/home/home.html',
	            resolve: {
                    deps: ['uiLoad',
                      function( uiLoad ){
                        return uiLoad.load(
                          ['css/styles/vendor.css','css/styles/frame-all.css','css/styles/index.css',
                            'js/myjs/utils.js',
                            'js/myjs/vendor.js',
                            'js/myjs/index.js']
                        )
                    }]
                }
	        })
	        .state('login', {
	            url: '/login?errorType',
	            templateUrl: 'js/views/login/login.html',
	            controller: function($scope, $stateParams) {
	                $scope.errorType = $stateParams.errorType;
	                $scope.isErrorType = function(errorType) {
	                    return $scope.errorType == errorType;
	                };
	            },
	        })
	        .state('server', {
	            url: '/server',
	            templateUrl: 'js/views/server/server.monitor.html',
	        })

	        $translateProvider.preferredLanguage('zh');
		    
		}).run(function($rootScope, $state, $stateParams,authenticationService,busyService) {

			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			
			var authenticateWhiteList = ['home', 'login'];
			
			var id;
			
			$rootScope.authenticate = function() {
		        authenticationService.validateAuthentication().then(function(result) {
		            if (!result.isAuthenticated) {
		                event.preventDefault();
		                if (result.previousIsAuthenticated) {
		                    $state.go('login', {
		                        errorType: 'SessionExpired'
		                    });
		                } else {
		                    $state.go('login', {
		                        errorType: 'Unauthorized'
		                    });
		                }
		            }
		        });
		    }();
			
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		        if (id) {
		            busyService.popBusy(id);
		        }
		        id = busyService.pushBusy('BUSY_LOADING');
		        if (authenticateWhiteList.indexOf(toState.name) < 0) {
		            authenticationService.validateAuthentication().then(function(result) {
		                if (!result.isAuthenticated) {
		                    event.preventDefault();
		                    if (result.previousIsAuthenticated) {
		                        $state.go('login', {
		                            errorType: 'SessionExpired'
		                        });
		                    } else {
		                        $state.go('login', {
		                            errorType: 'Unauthorized'
		                        });
		                    }
		                }
		            });
		        }
		    });

			$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
				if (id) {
//					 console.log(id);		
					busyService.popBusy(id);
				}
			});

		});