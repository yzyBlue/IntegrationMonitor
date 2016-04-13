/**
 * 
 */
angular.module('carousel', [ 'ui.bootstrap.transition' ]).directive('slide',
		function() {
			return {
				scope : {},
				restrict : 'E',
				require : '^carousel',
				replace : true,
				transclude : true,
				templateUrl : 'js/directives/slide-directive.html',
				link : function(scope, element, attrs, carousel) {
					scope.$element = element;
					carousel.addSlide(scope);

					scope.$on('destroy', function() {
						carousel.removeSlide(scope);
					})
				}
			}
		});