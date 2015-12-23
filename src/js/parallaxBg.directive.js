/**
 * parallaxBg
 * A directive for updating a repeating background image at a specified ratio 
 * relative to the window scroll position for a parallax effect
 * Note that $interval is not being used for performance reasons since
 * the scope is not being affected and $interval calls $scope.apply() each time it is called
 * @namespace Directives
 */
(function(){
    'use strict';

    angular
        .module('app')
        .directive('parallaxBg', parallaxBg);
        
    parallaxBg.$inject = ['$window', '$document', 'CONFIG'];
    
    function parallaxBg($window, $document, CONFIG){
        return function(scope, element, attrs){
    
            if(CONFIG.PARALLAX){
                var body = angular.element($document[0].body);
                
                setInterval(function(){
                    body.css("background-position","0px "+(CONFIG.PARALLAX_RATIO * $window.scrollY)+"px")
                },10);
            }
        }
    }
})();