(function(){
    'use strict';
    
    angular.module('app',['ngTouch','ngAnimate', 'ui.bootstrap'])
        .constant("CONFIG", 
            {
                //Disabled Until it's fixed..
                PARALLAX : false,
                PARALLAX_RATIO: 0.5
            }
        )
        .constant("EVENTS",
            {
                EVT_BOTTOM_REACHED : "EVT_BOTTOM_REACHED"
            }
        )
        .constant('IMAGES',
            [
                { path : "img/IMG_3192.JPG", title : "Autumn Memories", desc : "Pastel", pan:true},
                { path : "img/IMG_3074.JPG", title : "A Piece of Autumn", desc : "Pastel", pan:true},
                { path : "img/IMG_1014.JPG", title : "Mooring the Morgan", desc : "Pastel"},
                { path : "img/IMG_4800.JPG", title : "Twilight Bog", desc : "Oil Painting", pan:true },
                { path : "img/IMG_3906.JPG", title : "Misty Maine Meadow", desc : "Pastel", pan:true},
                { path : "img/IMG_2907.JPG", title : "Lucky Shadow", desc : "Oil Painting"},
                { path : "img/IMG_2194.JPG", title : "Late Night", desc : "Pastel", pan:true},
                { path : "img/IMG_5184.JPG", title : "West on 2", desc : "Pastel"},
                { path : "img/IMG_4355.JPG", title : "Enders", desc : "Pastel"},
                { path : "img/IMG_4038.JPG", title : "Entrance to McLean", desc : "Pastel"},
                { path : "img/IMG_3792.JPG", title : "Tranquility", desc : "Pastel"},
                { path : "img/IMG_3112.JPG", title : "Three in a Row", desc : "Oil Painting"},
                { path : "img/IMG_3085.JPG", title : "Midnight Flurry", desc : "Pastel"},
                { path : "img/IMG_2703.JPG", title : "Luminous Landscape", desc : "Pastel"},
                { path : "img/IMG_2301.JPG", title : "The Ladder Back", desc : "Watercolor"},
                { path : "img/IMG_1299.JPG", title : "Sturbridge Nocturnal", desc : "Pastel"},
                { path : "img/IMG_0191.JPG", title : "Down for the Night", desc : "Pastel"},
                { path : "img/IMG_0192.JPG", title : "Sturbridge Twilight", desc : "Pastel"},
                { path : "img/IMG_5592.JPG", title : "Monhegan Island", desc : "Pastel"},
                { path : "img/IMG_0340.JPG", title : "Moonlit Shadows", desc : "Pastel"},
                { path : "img/P1020135-800.jpg", title : "Winter Thaw", desc : "Pastel" },
                { path : "img/P1010268.JPG", title : "Acadia Wetlands", desc : "Pastel" },
                { path : "img/P1020139-800.jpg", title : "Waiting for Spring", desc : "Pastel" },
                { path : "img/P1020115-800.jpg", title : "Salmon Rapids", desc : "Pastel" },
                { path : "img/P1020186-800.jpg", title : "Hibernating", desc : "Watercolor" },
                { path : "img/P1020101-800.jpg", title : "Gazing at the Caribe Queen", desc : "Pastel" },
                { path : "img/P1020133-800.jpg", title : "Afternoon Reflections", desc : "Pastel" },
                { path : "img/P1020178-800.jpg", title : "Reflections of the Past", desc : "Pastel" },
            ]
        );
    
})();