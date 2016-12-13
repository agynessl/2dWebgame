var change = 0;
var maxmap=9;

//add out of bound check
//add enemy count

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

        this.grav = 40;
        this.coinsound = game.add.audio('coinsound');
        this.hitsound = game.add.audio('hitsound');
        //this.scale.setScreenSize( true );

        this.initializeGadgets();
        this.initializeEntities();
        this.addEmitter();
        this.addAnimations();

        
        this.timer = game.time.events.loop(20000/this.grav, this.updateWorld, this);

        this.createWorld();
    },

    initializeGadgets: function(){
        this.score = 0;
        this.live = 3;
        this.lineindex = 9;
        this.scoreLabel = game.add.text(10, 0, 'score: 0',
        { font: '18px Arial', fill: '#826484' });
        this.liveLabel = game.add.text(10, 15, 'lives: 3',
        { font: '18px Arial', fill: '#826484' });
        this.currentmap = initialMap;
                //add key
        this.cursor = game.input.keyboard.createCursorKeys();
    },

    initializeEntities: function(){
        this.player = game.add.sprite(180,450,'player');
        game.physics.arcade.enable(this.player);
        this.addGravity(this.player);
        this.player.checkWorldBounds = true;
        this.player.events.onOutOfBounds.add(this.gameOver, this);
        //add empty groups of entity
        this.stones = game.add.group();
        this.coins = game.add.group();
        this.enemies = game.add.group();
        this.healthpack = game.add.group();
        this.star = game.add.group();
    },

    addEmitter: function(){
    	this.bloodyeffect = game.add.emitter(0, 0, 15);
    	this.bloodyeffect.makeParticles('blood');
		this.bloodyeffect.setYSpeed(-150, 150);
		this.bloodyeffect.setXSpeed(-150, 150);
		this.bloodyeffect.setScale(2, 0, 2, 0, 800);
		this.bloodyeffect.gravity = 0;
    },

    addAnimations: function(){
        this.player.animations.add('updown',[0, 1], 8, true);
        this.player.animations.add('left', [2, 3], 8, true);
        this.player.animations.add('right', [4, 5], 8, true);
    },

    update: function() {
        this.movePlayer();

        this.world.setBounds( 0, 0, 400, 620);
        game.physics.arcade.collide(this.player, this.stones);
        game.physics.arcade.collide(this.player, this.enemies, this.takelife, null, this);
        game.physics.arcade.overlap(this.player,this.coins, this.takecoin, null, this);

        this.coins.forEach(function(coin){
          coin.animations.play('normal');
        });

    },

    movePlayer: function() {
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -200;
            this.player.body.velocity.y = this.grav;
            this.player.animations.play('left');
        }
        // If the right arrow key is pressed
        else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 200;
            this.player.body.velocity.y = this.grav;
            this.player.animations.play('right');
        }
        // If the up arrow key is pressed and the player is on the ground
        else if (this.cursor.up.isDown) {
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = -200 + this.grav;
            this.player.animations.play('updown');
        }
        else if(this.cursor.down.isDown){
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 200 + this.grav;
            this.player.animations.play('updown');
        }
        // If none of the key is pressed
        else {
            // Stop the player
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y= this.grav;
            this.player.animations.stop();
        }
    },

    addOneEnemy: function(x,y) {
        // Create a coin at the position x and y
        var anenemy = game.add.sprite(x, y, 'enemy');

        // Add the coin to our previously created group
        this.enemies.add(anenemy);

        // Enable physics on the coin
        game.physics.arcade.enable(anenemy);
        this.addGravity(anenemy);
        anenemy.body.immovable = true;
        anenemy.checkWorldBounds = true;
        anenemy.outOfBoundsKill = true;
    },

    addOneCoin: function(x,y){
        // Create a coin at the position x and y
        var acoin = game.add.sprite(x, y, 'coin');
        // acoin.animations.add('normal', [0, 2], 4, true);

        // Add the coin to our previously created group
        this.coins.add(acoin);

        // Enable physics on the coin
        game.physics.arcade.enable(acoin);
        acoin.animations.add('normal', [0, 2], 4, true);
        this.addGravity(acoin);

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
        this.addGravity(astone);
        astone.body.immovable = true;
        astone.checkWorldBounds = true;
        astone.outOfBoundsKill = true;
    },

    takecoin: function(player,coin){
        console.log('takeCoin')
        coin.kill();
        this.coinsound.play();
        this.score += 1;
        this.scoreLabel.text = 'score: ' + this.score;
    },

    takelife: function(player, enemy){
     	enemy.kill();
     	this.bloodyeffect.x = player.x;
     	this.bloodyeffect.y = player.y;
		this.bloodyeffect.start(true, 800, null, 15);
		this.hitsound.play();
		this.live -= 1;
		this.liveLabel.text = 'lives: ' + this.live;


      if(this.live < 1){
        this.gameOver();
      }
    },

    createWorld: function(){
        for(var k=0;k<3;k+=1){
            for(var y=9;y>-1;y-=1){
                for(var x=0;x<20;x+=1){
                    var char = this.currentmap[y][x];
                    if(char=='x'){
                        this.addOneStone(20*x,20*y+k*200+20);
                    }
                    else if(char=='o'){
                        this.addOneCoin(20*x,20*y+k*200+20);
                    }
                    else if(char=='!'){
                        this.addOneEnemy(20*x,20*y+k*200+20);
                    }
                }
            }
            this.currentmap=mapset[game.rnd.integerInRange(0,maxmap)]
        }

    },

    addGravity: function(element){
      element.body.velocity.y = this.grav;
    },

    updateWorld: function(){
        // console.log(map[this.lineindex])
        // this.lineindex=0;
        for(var i=0;i<20;i+=1){
            var char=this.currentmap[this.lineindex][i];
            if(char=='x'){
                this.addOneStone(20*i,20);
            }
            else if(char=='o'){
                this.addOneCoin(20*i,20);
            }
            else if(char=='!'){
                this.addOneEnemy(20*i,20);
            }
        }

        this.lineindex-=1;
        if(this.lineindex<0){
            this.currentmap=mapset[game.rnd.integerInRange(0,maxmap)];
            this.lineindex=9;
        }
    },

    gameOver: function(){
        game.state.start('menu');
    },

};


var initialMap = [
	"x                  x",
    "x                  x",
    "x          !       x",
    "x                  x",
    "x    o             x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x"];