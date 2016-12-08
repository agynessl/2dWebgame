var playState = {
    preload: function(){
        console.log('In playState:preload');
    },

    create: function() {

        this.cursor = game.input.keyboard.createCursorKeys();

        game.input.keyboard.addKeyCapture(
          [Phaser.Keyboard.UP, Phaser.Keyboard.DOWN,
          Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT]
        );

        this.cursor.up.onDown.add(this.moveUp, this);
        this.cursor.down.onDown.add(this.moveDown, this);
        this.cursor.left.onDown.add(this.moveLeft, this);
        this.cursor.right.onDown.add(this.moveRight, this);


        this.wasd = {
          up: game.input.keyboard.addKey(Phaser.Keyboard.W),
          down: game.input.keyboard.addKey(Phaser.Keyboard.S),
          left: game.input.keyboard.addKey(Phaser.Keyboard.A),
          right: game.input.keyboard.addKey(Phaser.Keyboard.D)
        };

        this.player = game.add.sprite(200,300,'player');
        game.physics.arcade.enable(this.player);
        this.player.animations.add('updown',[0, 1], 8, true);
        this.player.animations.add('left', [2, 3], 8, true);
        this.player.animations.add('right', [4, 5], 8, true);


        this.coin = game.add.sprite(100,200,'coin');
        game.physics.arcade.enable(this.coin);
        this.coin.animations.add('normal', [0, 2], 4, true);

    },

    update: function() {
        this.coin.animations.play('normal');

        //this.movePlayer();
    },

    updateScore: function() {

    },

    gameOver: function() {

    },

    moveUp: function(){
      this.player.y -= 20;
      this.player.animations.play('updown');
    },
    moveDown: function(){
      this.player.y += 20;
      this.player.animations.play('updown');
    },
    moveLeft: function(){
      this.player.x -= 20;
      this.player.animations.play('left');
    },
    moveRight: function(){
      this.player.x += 20;
      this.player.animations.play('right');
    },
    // movePlayer: function() {
    //
    //   if (game.input.totalActivePointers == 0) {
    //     this.moveLeft = false;
    //     this.moveRight = false;
    //   }
    //
    //
    //   if (this.cursor.left.onDown || this.wasd.left.onDown || this.moveLeft) {
    //     this.player.x -= 20;
    //     //this.player.body.velocity.y = 0;
    //     this.player.animations.play('left');
    //   }
    //   else if (this.cursor.right.onDown || this.wasd.right.onDown
    //   || this.moveRight) {
    //     this.player.x += 20;
    //     //this.player.body.velocity.y = 0;
    //     this.player.animations.play('right');
    //   }
    //   else if (this.cursor.up.onDown || this.wasd.up.onDown
    //   || this.moveUp){
    //     //this.player.body.velocity.x = 0;
    //     this.player.y -= 20;
    //     this.player.animations.play('updown');
    //   }
    //   else if (this.cursor.down.onDown || this.wasd.down.onDown
    //   || this.moveDown){
    //     //this.player.body.velocity.x = 0;
    //     this.player.y += 20;
    //     this.player.animations.play('updown');
    //   }
    // },


    addEnemy: function() {

    }
};
