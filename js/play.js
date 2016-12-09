var change = 0;
var lineindex=0;
var map=[
    "x                  x",
    "x                  x",
    "x   xxxx        o  x",
    "x                  x",
    "x                  x",
    "x      o       x   x",
    "x              x   x",
    "x           xxxx   x",
    "x   !              x",
    "x                  x"];


var playState = {
    preload: function(){
        console.log('In playState:preload');
    },


    create: function() { 
        this.score = 0;
        this.scoreLabel = game.add.text(10, 10, 'score: 0',
{ font: '20px Arial', fill: '#826484' });



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


        game.physics.arcade.enable(this.player);
        
        //add empty groups of entity
        this.stones = game.add.group();
        this.coins = game.add.group();
        this.enemies = game.add.group();

        //every 0.1 second move 2 pixel
        this.timer = game.time.events.loop(100, this.changeperspective, this);
        this.timer = game.time.events.loop(3000, this.updateWord, this);

    },

    update: function() {

        //this.world.setBounds( 0, 0, this.world.width, this.game.height  );

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

    addOneEnemy: function(x,y) {
        // Create a coin at the position x and y
        var anenemy = game.add.sprite(x, y, 'enemy');

        // Add the coin to our previously created group
        this.enemies.add(anenemy);

        // Enable physics on the coin 
        game.physics.arcade.enable(anenemy);

        anenemy.checkWorldBounds = true;
        anenemy.outOfBoundsKill = true;
    },

    addOneCoin: function(x,y){
        // Create a coin at the position x and y
        var acoin = game.add.sprite(x, y, 'coin');

        // Add the coin to our previously created group
        this.coins.add(acoin);

        // Enable physics on the coin 
        game.physics.arcade.enable(acoin);

        acoin.checkWorldBounds = true;
        acoin.outOfBoundsKill = true;
    },

    addOneStone: function(x,y){
        // Create a coin at the position x and y
        var astone = game.add.sprite(x, y, 'stone');

        // Add the coin to our previously created group
        this.stones.add(astone);

        // Enable physics on the coin 
        game.physics.arcade.enable(astone);

        astone.checkWorldBounds = true;
        astone.outOfBoundsKill = true;
    },

    takecoin: function(player,coin){
        console.log('takeCoin')
        this.coin.kill();
        this.score += 1;
        this.scoreLabel.text = 'score: ' + this.score;
    },

    createWorld: function(){

    },

    updateWord: function(){
        console.log('updateword');
        console.log(lineindex)
        console.log(map[lineindex])
        for(var i=0;i<20;i+=1){
            var char=map[lineindex][i];
            if(char=='x'){
                this.addOneStone(20*i,0);
            }
            else if(char=='o'){
                this.addOneCoin(20*i,0);
            }
            else if(char=='!'){
                this.addOneEnemy(20*i,0);
            }
        }
        lineindex+=1;
        if(lineindex==10){
           lineindex=0;
        }
    }



};
