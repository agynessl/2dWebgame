var loadState = {

    preload: function() {


        console.log('In loadState:preload');


        game.load.spritesheet('playbutton', 'assets/play.png', 150, 100);
      	game.load.spritesheet('backbutton', 'assets/back.png', 150, 100);
      	game.load.spritesheet('aboutbutton', 'assets/about.png', 150, 100);
        game.load.spritesheet('player','assets/character.png', 20, 20);  
        game.load.spritesheet('coin','assets/coin.png',20,20);
        game.load.image('enemy','assets/enemy.png',20,20);
    },

    create: function() {
        game.state.start('menu');
    }
};
