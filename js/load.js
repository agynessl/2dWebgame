var loadState = {

    preload: function() { 
        // Add 'loading...' label
        //var loading = game.add.text(game.width/2, game.height/2, 'loading...', { font: '30px Arial', fill: '#fff', align: 'center' })
        //loading.anchor.setTo(0.5);

        // Load all images
    	//game.load.image('player', 'assets/player.png');
        //game.load.spritesheet('enemies', 'assets/enemies.png', 52, 50);

        // Load sounds effects
        //game.load.audio('hit', ['assets/hit.mp3', 'assets/hit.ogg']);
    },

    create: function() { 
        game.state.start('play');
    },
};
