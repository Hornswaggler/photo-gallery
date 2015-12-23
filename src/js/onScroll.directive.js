(function(){
    'use strict';
    
    angular
        .module('app')
        .directive('onScroll', onScroll);
    
    onScroll.$inject = ['$window','$document'];
    
    function onScroll($window, $document){
        return function(scope, element, attrs) {

            angular.element($window).bind("scroll", function() {

                //Had to go w/ JQuery :-(
                if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
                    scope.$emit("EVT_BOTTOM_REACHED");
                }
                
            });
        };
    }
    
})();