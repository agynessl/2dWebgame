var game = new Phaser.Game(400, 600, 'gamediv');

game.state.add('boot', bootState); 
game.state.add('load', loadState); 
game.state.add('play', playState); 

game.state.start('boot');