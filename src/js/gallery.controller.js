(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('GalleryController', GalleryController);
        
    GalleryController.$inject = ['$scope','IMAGES','EVENTS', 'bio-service'];
    
    function GalleryController($scope, IMAGES, EVENTS, bioService){
        var vm = this;
        vm.images =	[];
        vm.firstPosition = true;
        
        vm.selectedImage = [];
        
        vm.selectImage = selectImage;
        vm.closeCarousel = closeCarousel;
        vm.loadNextImage = loadNextImage;
        vm.loadPreviousImage = loadPreviousImage;
        vm.showCarousel = showCarousel;
        vm.getImagePosition = getImagePosition;
        vm.displayBio = displayBio;

        vm.nextImage = false;
        vm.previousImage = false;
        
        $scope.$on(EVENTS.EVT_BOTTOM_REACHED, handle_EVT_BOTTOM_REACHED);
        
        activate();
        
        //////////////////////////////////////////////////////////////////
        
        function activate(){
            loadMoreImages();
        }

        function displayBio(){
            bioService.displayBio();
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
            vm.selectedImage[vm.getImagePosition()] = image;
        }
        
        function closeCarousel(){
            vm.nextImage = false;
            vm.previousImage = false;
            vm.selectedImage = [];
        }
        
        function loadNextImage(){
            vm.nextImage = true;
            vm.previousImage = false;
            
            if(vm.selectedImage[getImagePosition()].index == vm.images.length-1){
                loadMoreImages();
            }
            vm.selectedImage[toggleImagePosition()] = vm.selectedImage[getNextImagePosition()].nextImage;
        }
        
        function loadPreviousImage(){
            vm.nextImage = false;
            vm.previousImage = true;
            
            if(vm.selectedImage[getImagePosition()].index == 0){
                loadAllImages();
            }
            vm.selectedImage[toggleImagePosition()] = vm.selectedImage[getNextImagePosition()].previousImage;
        }
        
        function showCarousel(){
            return vm.selectedImage.length != 0;
        }
        
        function handle_EVT_BOTTOM_REACHED(event, data){
            loadMoreImages();
            $scope.$apply();
        };
        
        function toggleImagePosition(){
            vm.firstPosition = !vm.firstPosition;
            return getImagePosition();
        }
        
        function getImagePosition(){
            return vm.firstPosition?0:1;
        }
        
        function getNextImagePosition(){
             return !vm.firstPosition?0:1;
        }
    }
})();