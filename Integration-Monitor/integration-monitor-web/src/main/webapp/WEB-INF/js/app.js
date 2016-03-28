angular.module('integration.monitor.controllers',['integration.monitor.controllers.app' ]);
//angular.module('integration.monitor.i18n', ['integration.monitor.i18n.zh','integration.monitor.i18n.en' ]);
angular.module(
		'inteMonitorApp',
		['pascalprecht.translate', 'integration.monitor.controllers']).config(
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
			
			//$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data|mias-iv|mias-cpoe|shine):/);
			
		    // UI router config
		    $urlRouterProvider.otherwise('/');
			
		    $stateProvider.when('home', {
	            url: '/',
	            templateUrl: 'js/views/home/home.html',
	            resolve: {
                    deps: ['uiLoad',
                      function( uiLoad ){
                        return uiLoad.load(
                          ['css/styles/account.css',
                            'js/myjs/account.js',
                            'js/myjs/vendor.js',
                            'js/myjs/modules.js']
                        )
                    }]
                }
	        })
	        .when('login', {
	            url: '/login',
	            templateUrl: 'js/views/login.html',
	        })
	        .when('server', {
	            url: '/server',
	            templateUrl: 'js/views/server/server.monitor.html',
	        })


		}).run(function($rootScope, $state, $stateParams,busyService) {

			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			var isLoading;
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
//			if (isLoading) {
//				 console.log(isLoading)		
//				busyService.popBusy(isLoading);
//			}
//			isLoading = busyService.pushBusy('BUSY_LOADING');
//			 console.log(isLoading);		
		});

			$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
//				if (isLoading) {
//					 console.log(isLoading)		
//					busyService.popBusy(isLoading);
//				}
			});

		});