'use strict';
angular.module('integration.monitor.controllers',['integration.monitor.controllers.app' ]);
angular.module('integration.monitor.i18n', ['integration.monitor.i18n.zh','integration.monitor.i18n.en' ]);
angular.module(
		'inteMonitorApp',
		['pascalprecht.translate', 'integration.monitor.controllers','integration.monitor.i18n' ]).config(
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
			
//			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|data|mias-iv|mias-cpoe|shine):/);
			
			// Register a loader for the static files
			// So, the module will search missing translation tables under the specified urls.
			// Those urls are [prefix][langKey][suffix].
			$translateProvider.useStaticFilesLoader({
				prefix : 'i18n/',
				suffix : '.js'
			});
			// Tell the module what language to use by default
			$translateProvider.preferredLanguage('zh');
			// Tell the module to store the language in the local storage
			$translateProvider.useLocalStorage();

		});