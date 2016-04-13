angular.module('carousel', ['ui.bootstrap.transition']).
    directive('carousel', function($transition, $timeout){
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                forward: '=',
                currentSlide: '='
            },
            controller: function($scope, $element) {
                $scope.slides = [];
                this.addSlide = function (slide) {
                    if($scope.currentSlide === $scope.slides.length){
                        slide.active = true;
                    }
                    $scope.slides.push(slide);
                };
                this.removeSlide = function(slide){
                    var idx = $scope.slides.indexOf(slide);
                    $scope.slides.splice(idx, 1);
                };

                var oldSlide = $scope.currentSlide;
                var transition;
                function go(from, to, forward){
                    if(from === to) return;

                    var lor = forward ? 'left' : 'right';
                    var pon = forward ? 'next' : 'prev';
                    var fromSlide = $scope.slides[from];
                    var toSlide = $scope.slides[to];

                    toSlide[pon] = true;
                    //var reflow = toSlide.$element.offsetWidth;

                    $timeout(function(){
                        fromSlide[lor] = toSlide[lor] = true;
                    });

                    transition = $transition(toSlide.$element, {}).
                        then(function(){
                            angular.extend(fromSlide, {active: false, left: false, right: false});
                            angular.extend(toSlide, {active: true, left: false, right: false, prev: false, next: false});

                            oldSlide = to;
                            transition = null;
                        });
                }

                $scope.$watch('currentSlide', function(newSlide){
                    if(newSlide === oldSlide) return;

                    var forward = $scope.forward;
                    if(!transition){
                        go(oldSlide, newSlide, forward);
                    }
                });
            },
            templateUrl: 'js/directives/carousel-directive.html'
        };
    });
function go(from, to, forward){
    if(from === to) return;

    var lor = forward ? 'left' : 'right';
    var pon = forward ? 'next' : 'prev';
    var fromSlide = $scope.slides[from];
    var toSlide = $scope.slides[to];

    toSlide[pon] = true;
    var reflow = toSlide.$element[0].offsetWidth;

    $timeout(function(){
        fromSlide[lor] = toSlide[lor] = true;
    });

    transition = $transition(toSlide.$element, {}).
        then(function(){
            angular.extend(fromSlide, {active: false, left: false, right: false});
            angular.extend(toSlide, {active: true, left: false, right: false, prev: false, next: false});

            oldSlide = to;
            transition = null;
        });
}