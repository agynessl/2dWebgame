var loadState = {

    preload: function() { 
        // Add 'loading...' label
        console.log('In loadState:preload');
        

        // Load all images
    	// game.load.image('player', 'assets/player.png');
        //game.load.spritesheet('enemies', 'assets/enemies.png', 52, 50);

        // Load sounds effects
        //game.load.audio('hit', ['assets/hit.mp3', 'assets/hit.ogg']);
    },

    create: function() { 
        game.state.start('play');
    },
};


