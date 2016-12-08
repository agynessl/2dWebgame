var loadState = {

    preload: function() { 
        // Add 'loading...' label
        console.log('In loadState:preload');

    },

    create: function() { 
        game.state.start('play');
    }
};


