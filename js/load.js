var loadState = {

    preload: function() {


        console.log('In loadState:preload');


        game.load.spritesheet('playbutton', 'assets/play.png', 150, 100);
      	game.load.spritesheet('backbutton', 'assets/back.png', 150, 100);
      	game.load.spritesheet('aboutbutton', 'assets/about.png', 150, 100);
        game.load.spritesheet('player','assets/character.png', 20, 20);
        game.load.spritesheet('coin','assets/coin.png',20,20);
        game.load.image('stone','assets/stone.png',20,20);
        game.load.image('enemy','assets/enemy.png',20,20);

        game.load.image('healthpack', 'assets/healthpack.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('heart', 'assets/heart.png');
        game.load.image('blood', 'assets/particleRed.png');
        game.load.image('white', 'assets/particleWhite.png');

        game.load.audio('coinsound','assets/coin.mp3');
        game.load.audio('hitsound','assets/hit.mps');
    },

    create: function() {
        game.state.start('input');
    }
};
