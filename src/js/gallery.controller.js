(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('GalleryController', GalleryController);
        
    GalleryController.$inject = ['$scope','IMAGES','EVENTS'];
    
    function GalleryController($scope, IMAGES, EVENTS){
        var vm = this;
        vm.images =	[];
        
        vm.selectedImage = null;
        
        vm.selectImage = selectImage;
        vm.closeCarousel = closeCarousel;
        vm.loadNextImage = loadNextImage;
        vm.loadPreviousImage = loadPreviousImage;
        
        $scope.$on(EVENTS.EVT_BOTTOM_REACHED, handle_EVT_BOTTOM_REACHED);
        
        activate();
        
        //////////////////////////////////////////////////////////////////
        
        function activate(){
            loadMoreImages();
        }
        
        function loadMoreImages(){
            var firstIndex = vm.images.length;
            var maxLength = IMAGES.length < vm.images.length + 12 ? IMAGES.length :  vm.images.length + 12;

            if(firstIndex != maxLength && firstIndex > 0){
                IMAGES[firstIndex - 1].nextImage = IMAGES[firstIndex];
                IMAGES[0].previousImage = IMAGES[maxLength - 1];
            }
            
            for(var i = firstIndex; i < maxLength ; i ++){
                IMAGES[i].nextImage = IMAGES[i+1<maxLength?i+1:0];
                IMAGES[i].previousImage = IMAGES[i==0?maxLength-1:i-1];
                IMAGES[i].index=i;
                vm.images.push(IMAGES[i]);
            }
            
            return maxLength;
        }
        
        //This probably should never be called.... :-|
        function loadAllImages(){
            if(vm.images.length != IMAGES.length){
                while(IMAGES.length!=loadMoreImages());
            }
        }
        
        function selectImage(image){
            vm.selectedImage = image;
        }
        
        function closeCarousel(){
            vm.selectedImage = null;
        }
        
        function loadNextImage(){
            if(vm.selectedImage.index == vm.images.length-1){
                loadMoreImages();
            }
            vm.selectedImage = vm.selectedImage.nextImage;
        }
        
        function loadPreviousImage(){
            if(vm.selectedImage.index == 0){
                loadAllImages();
            }
            vm.selectedImage = vm.selectedImage.previousImage;
        }
        
        function handle_EVT_BOTTOM_REACHED(event, data){
            loadMoreImages();
            $scope.$apply();
        };

    }
})();