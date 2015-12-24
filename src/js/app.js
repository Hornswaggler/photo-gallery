(function(){
    'use strict';
    
    angular.module('app',['ngTouch','ngAnimate'])
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
                { path : "img/P1010265.JPG", title : "Little House on the Prarie", desc : "10' x 300\", Oil on Water" },
                { path : "img/P1020110-800.jpg", title : "Piece of Shit Car", desc : "-3''' x 1'''''''', Water on Rice" },
                { path : "img/P1020135-800.jpg", title : "The Field of Dreams", desc : "? x %, Toothpaste and Food Coloring" },
                { path : "img/P1020179-800.jpg", title : "Breakfast is Served", desc : "123 x 456, Mixed Vegetables" },
                { path : "img/P1010268.JPG", title : "Shit's Creek (No Paddle)", desc : "2 x 4, Scented Candle Wax" },
                { path : "img/P1020112-800.jpg", title : "An Incredibly Long Title for an Incredibly Small Painting", desc : "1 x 1 picometers, Dog Poo and Food Coloring" },
                { path : "img/P1020136-800.jpg", title : "Happy Little Trees", desc : "Unhappy Paper that used to be Trees" },
                { path : "img/P1020180-800.jpg", title : "Rat with Wings", desc : "3 x 7 cubits, Guano on Papyrus" },
                { path : "img/P1010269.JPG", title : "Ugh, not MORE SNOW!", desc : "I give up..." },
                { path : "img/P1020113-800.jpg", title : "Calm before the Storm", desc : "1\" x 1\" Various Colored Fluids on Canvas" },
                { path : "img/P1020139-800.jpg", title : "That Tree at the end of Shawshank Redemption", desc : "A tree in a field w/ Rocks" },
                { path : "img/P1020183-800.jpg", title : "Cripple Creek", desc : "Sprang a Leak" },
                { path : "img/P1010281.JPG", title : "Trees / Water / Air", desc : "1.2343\" x 4000', Not a Painting, Real" },
                { path : "img/P1020115-800.jpg", title : ":-)", desc : "? x ?" },
                { path : "img/P1020164-800.jpg", title : "Cabin in the Woods", desc : "x x x, 3<=2" },
                { path : "img/P1020186-800.jpg", title : "Old Ass Trailer in Old Ass Garage", desc : "I know where you can get a good deal on an old trailer..." },
                { path : "img/P1010285.JPG", title : "I Can't find where I Parked the Car", desc : "And I can't see a thing in this fog" },
                { path : "img/P1020119-800.jpg", title : "Follow the Yellow Bri.. The Dirt Path", desc : ".013 x .000012', Glazed Donut on Bagel" },
                { path : "img/P1020165-800.jpg", title : "Neighbor of the Little House on the Prarie", desc : "Hot, there is no Air Conditioning" },
                { path : "img/P1020189-800.jpg", title : "Where I'd Rather Be Right Now", desc : "1 x 1, Spite on Envy" },
                { path : "img/P1020101-800.jpg", title : "Finally, Those Tourists are Gone...", desc : "Let's PARTY!" },
                { path : "img/P1020124-800.jpg", title : "How do you Work This Thing?", desc : "Hold on, Let me get my glasses" },
                { path : "img/P1020172-800.jpg", title : "Brrrrrrrrrrr", desc : "4.4.4.4.4 x 3.3.3.3.3.3.3.3.3" },
                { path : "img/P1020191-800.jpg", title : "Did You Catch Anything?", desc : "Nope, the pond is liquid methane, it smells real bad" },
                { path : "img/P1020104-800.jpg", title : "A Horses Ass", desc : "Wait, no, Two Horses Asses..." },
                { path : "img/P1020127-800.jpg", title : "Damned Beavers Dam", desc : "Dammmmmmnnnnnn" },
                { path : "img/P1020174-800.jpg", title : "Free Advertising", desc : "Free 99"},
                { path : "img/P1020106-800.jpg", title : "Obligatory Cheese", desc : "Danish" },
                { path : "img/P1020130-800.jpg", title : "But These Shoes are Brand New", desc : "And they were expensive" },
                { path : "img/P1020177-800.jpg", title : "I wish I brought a Jacket", desc : "" },
                { path : "img/P1020107-800.jpg", title : "The Road to Nowhere", desc : "We'll Take That Ride" },
                { path : "img/P1020133-800.jpg", title : "*(&^((*%&()(&#@))$#)&$_)#%&@_%@__@*#%_)", desc : "%%^&#@#&^%$&*^%$" },
                { path : "img/P1020178-800.jpg", title : "", desc : "FIN" },
            ]
        );
    
})();