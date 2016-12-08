var change = 0;

var playState = {
    preload: function(){
        console.log('In playState:preload');
    },

    create: function() {


       this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
       this.scale.maxWidth = this.game.width;
       this.scale.maxHeight = this.game.height;
       this.scale.pageAlignHorizontally = true;
       this.scale.pageAlignVertically = true;
       //this.scale.setScreenSize( true );


        //add key
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

        this.player = game.add.sprite(180,this.world.height - 20,'player');
        game.physics.arcade.enable(this.player);
        this.player.animations.add('updown',[0, 1], 8, true);
        this.player.animations.add('left', [2, 3], 8, true);
        this.player.animations.add('right', [4, 5], 8, true);

        this.coin = game.add.sprite(100,200,'coin');
        game.physics.arcade.enable(this.coin);
        this.coin.animations.add('normal', [0, 2], 4, true);

        //every 0.1 second move 2 pixel
        this.timer = game.time.events.loop(100, this.changeperspective, this);

    },

    update: function() {

        //this.world.setBounds( 0, 0, this.world.width, this.game.height  );

        this.coin.animations.play('normal');
        game.physics.arcade.overlap(this.player, this.coin,
          this.takeCoin, null, this);

    },

    changeperspective: function(){
      change -= 2;
      this.world.setBounds( 0, change , this.world.width, this.game.height + change);
      this.camera.y = change;
    },

    updateScore: function() {

    },

    gameOver: function() {

    },

    //move the player
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
    addEnemy: function() {

    },


    takeCoin: function(player, coin) {
      this.coin.kill();
    }

};
