var playState = {
    preload: function(){
        console.log('In playState:preload');
    },

    create: function() { 
        this.score = 0;
        this.scoreLabel = game.add.text(10, 10, 'score: 0',
{ font: '20px Arial', fill: '#826484' });


        this.coin = game.add.sprite(100,200,'coin');
        this.coin.animations.add('normal', [0, 2], 4, true);

        game.physics.arcade.enable(this.coin);
        game.physics.arcade.overlap(this.player, this.coin, this.takeCoin,
null, this);

        this.stone = game.add.group();
        this.stone.enableBody = true;

    },

    update: function() {
        this.coin.animations.play('normal');
    },

    updateScore: function() {
        
    },

    gameOver: function() {
        
    },

    addEnemy: function() {
 
    },

    takeCoin: function(){
        this.coing.kill();
        this.score += 1;
        this.scoreLabel.text = 'score: ' + this.score;
    },

    createWorld: function(){

    }
};
