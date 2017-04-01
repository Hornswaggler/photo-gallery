(function(){
    "use strict";

    angular
        .module("app")
        .service("bio-service", ["$uibModal", BioService]);

    function BioService($uibModal){

        var service = {
            displayBio : displayBio
        };

        return service;

        function displayBio(){
            var modalInstance = $uibModal.open({
                ariaLabelledBy: "modal-title",
                ariaDescribedBy: "modal-body",
                templateUrl: "js/templates/bio.html",
                controller: "bio-controller",
                controllerAs: "vm"
                
            });

        }

    }

    angular 
        .module("app")
        .controller("bio-controller", ["$uibModalInstance", BioController]);

    function BioController($uibModalInstance){
        var vm = this;

        vm.close = close;

        //////////

        function close(){
            $uibModalInstance.close();
        }
    }

})();