var playState = {
    preload: function(){
        console.log('In playState:preload');
    },

    create: function() { 
        this.coin = game.add.sprite(100,200,'coin');
        game.physics.arcade.enable(this.coin);
        this.coin.animations.add('normal', [0, 2], 4, true);

    },

    update: function() {
        this.coin.animations.play('normal');
    },

    updateScore: function() {
        
    },

    gameOver: function() {
        
    },

    addEnemy: function() {
 
    }
};
