(function () {
    'use strict';   
    
    angular
        .module('app')
        .directive('gallery', gallery);
    
    function gallery(){

        var directive = {
            templateUrl : 'js/templates/gallery.html',
            restrict : 'E'
        };
        return directive;
    }
 
})();