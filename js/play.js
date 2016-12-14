var direction = ['d','a','s','w'];
var thescore = 0;
//add out of bound check
//add enemy count

var playState = {
    preload: function(){
        console.log('In playState:preload');
    },


    create: function() {
    	this.healthsound = game.add.audio('healthsound');
    	this.painsound = game.add.audio('painsound');
    	this.eatsound = game.add.audio('eatsound');
        this.coinsound = game.add.audio('coinsound');
        this.trippyBGM = game.add.audio('trippyBGM');
        this.trippyBGM.loop = true;
        this.happyBGM = game.add.audio('happyBGM');
        this.happyBGM.loop = true; // Make it loop
		this.happyBGM.play();


        this.initializeGadgets();
        this.initializeEntities();
        this.addEmitter();
        this.addAnimations();

        this.createWorld();
        this.switchMusicEvent = game.time.now+this.nextModeTime*2;
        this.updateWorldEvent = game.time.now+this.updateWorldTime;
        this.AddHealthPackEvent = game.time.now+this.changeDirectionTime;
        this.changeDirectionEvent = game.time.now+this.healthRespawnTime;
        this.nextModeEvent = game.time.now+this.nextModeTime;

    },

    initializeGadgets: function(){
    	this.easymap = 9;
    	this.mediummap = 9;
    	//TO BE CONTINUE
        this.score = 0;
        this.live = 3;
        this.lineindex = 9;
        this.grav = 40;
        this.enemymovingspeed = 50;
        this.healthRespawnTime = 20000;
        this.updateWorldTime = 20000/this.grav;
        this.changeDirectionTime = 3000;
        this.nextModeTime = 30000;
        this.initialTime = game.time.now;
        this.mode = 0;
        this.scoreLabel = game.add.text(10, 0, 'score: 0',
        { font: '18px Arial', fill: '#826484' });
        this.heartImage = game.add.image(340,0,'heart');
        this.liveLabel = game.add.text(365, 0, 'x '+this.live,
        { font: '18px Arial', fill: '#826484' });
        this.timeLabel = game.add.text(175, 0, 'Time:'+0,
        { font: '18px Arial', fill: '#826484' });
        this.StateText = game.add.text(game.world.centerX, game.world.centerY, ' ',
        { font: '32px Arial', fill: '#826484'});
        this.StateText.anchor.setTo(0.5,0.5);
        this.StateText.visible = false;

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
        this.healthpacks = game.add.group();
        this.stars = game.add.group();
    },

    addEmitter: function(){
    	this.traileffect = game.add.emitter(0,0,Math.MAX_SAFE_INTEGER);
    	this.traileffect.makeParticles('white');
    	this.traileffect.setYSpeed(0,10);
        this.traileffect.setAlpha(1, 0.5, 800);
        this.traileffect.setScale(2, 1, 2, 1, 800);
        this.traileffect.start(false, 1200, 200, Math.MAX_SAFE_INTEGER);
    	this.traileffect.grav=this.grav;
    	this.player.addChild(this.traileffect);
    	this.traileffect.position.x =10;
		this.traileffect.position.y =20;
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
        this.timeLabel.text = 'Time: '+Math.floor((game.time.now-this.initialTime)/1000);
        this.movePlayer();
        this.world.setBounds( 0, 0, 400, 620);
        game.physics.arcade.collide(this.player, this.stones);
        game.physics.arcade.collide(this.healthpacks, this.enemies, this.changeDirectionWhenCollideWall, null, this);
        game.physics.arcade.collide(this.stones, this.enemies, this.changeDirectionWhenCollideWall, null, this);
        game.physics.arcade.collide(this.player, this.enemies, this.takelife, null, this);
        game.physics.arcade.overlap(this.player,this.coins, this.takecoin, null, this);
        game.physics.arcade.overlap(this.player,this.healthpacks,this.takehealthpack,null,this);
        game.physics.arcade.overlap(this.healthpacks,this.stones,this.killObject,null,this);
        game.physics.arcade.overlap(this.healthpacks,this.coins,this.killObject,null,this);
        this.coins.forEachAlive(function(coin){
          coin.animations.play('normal');
        });

        this.updateEvents();
    },

    updateEvents: function(){
    	if(this.updateWorldEvent<game.time.now){
    		this.updateWorld();
    		this.updateWorldEvent+=this.updateWorldTime;
    	}
    	if(this.AddHealthPackEvent<game.time.now){
    		this.addOneHealthPack();
    		this.AddHealthPackEvent+=this.healthRespawnTime;
    	}
    	if(this.changeDirectionEvent<game.time.now){
    		this.changeEnemyMovingDirection();
    		this.changeDirectionEvent+=this.changeDirectionTime;
    	}
    	if(this.nextModeEvent<game.time.now){
    		this.nextModeEvent+=this.nextModeTime;
    		if(this.mode<3) this.mode+=1;
    	}

    	if(this.mode<=1){
    		game.physics.arcade.collide(this.coins,this.enemies,this.changeDirectionWhenCollideWall,null,this);
    	}
    	if(this.mode>1){
    		game.physics.arcade.overlap(this.enemies,this.coins,this.enemyEatCoin,null,this);
    	}
      
    	if(this.switchMusicEvent<game.time.now){
    		this.enemymovingspeed=100;
    		this.happyBGM.stop();
    		this.trippyBGM.play();
    		this.switchMusicEvent=Number.MAX_SAFE_INTEGER;
    	}
    },

    movePlayer: function() {
        if (this.cursor.left.isDown) {
        	this.traileffect.setXSpeed(100,200);
        	this.traileffect.setYSpeed(0,10);
            this.player.body.velocity.x = -200;
            this.player.body.velocity.y = this.grav;
            this.player.animations.play('left');
        }
        // If the right arrow key is pressed
        else if (this.cursor.right.isDown) {
        	this.traileffect.setXSpeed(-100,-200);
        	this.traileffect.setYSpeed(0,10);
            this.player.body.velocity.x = 200;
            this.player.body.velocity.y = this.grav;
            this.player.animations.play('right');
        }
        // If the up arrow key is pressed and the player is on the ground
        else if (this.cursor.up.isDown) {
        	this.traileffect.setXSpeed(-50,50);
        	this.traileffect.setYSpeed(0,10);
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = -200 + this.grav;
            this.player.animations.play('updown');
        }
        else if(this.cursor.down.isDown){
        	this.traileffect.setXSpeed(-50,50);
        	this.traileffect.setYSpeed(-200,-100);
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 200 + this.grav;
            this.player.animations.play('updown');
        }
        // If none of the key is pressed
        else {
            // Stop the player
        	this.traileffect.setXSpeed(-50,50);
        	this.traileffect.setYSpeed(0,10);
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y= this.grav;
            this.player.animations.stop();
        }
    },

    addOneHealthPack: function(){
    	var x = game.rnd.integerInRange(1,18);
    	var hp = game.add.sprite(x*20, 20, 'healthpack');
    	this.healthpacks.add(hp);
    	game.physics.arcade.enable(hp);
    	this.addGravity(hp);
    	hp.body.immovable = true;
    	hp.checkWorldBounds = true;
        hp.outOfBoundsKill = true;
    },

    addOneStar: function(){

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
        var dir = direction[game.rnd.integerInRange(0,2)];
        switch(dir){
        	case 's':
        		anenemy.body.velocity.y = this.grav + this.enemymovingspeed;
        		break;
        	case 'a':
        		anenemy.body.velocity.x = -this.enemymovingspeed;
        		break;
        	case 'd':
        		anenemy.body.velocity.x = this.enemymovingspeed;
        		break;
        }
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
        acoin.body.immovable = true;
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
        coin.kill();
        this.coinsound.play();
        this.score += 1;
        this.scoreLabel.text = 'score: ' + this.score;
    },

    enemyEatCoin: function(enemy,coin){
    	coin.kill();
    	this.eatsound.play();
    },

    killObject: function(dominant,killed){
    	killed.kill();
    },

    takelife: function(player, enemy){
     	enemy.kill();
     	this.painsound.play();
     	this.bloodyeffect.x = player.x;
     	this.bloodyeffect.y = player.y;
     	game.camera.shake(0.02, 300);
		this.bloodyeffect.start(true, 800, null, 15);
		this.live -= 1;
		this.liveLabel.text = 'x ' + this.live;


      if(this.live < 1){
        this.gameOver();
      }
    },

    takehealthpack: function(player,healthpack){
    	healthpack.kill();
    	game.add.tween(player.scale).to({x: 1.3, y: 1.3}, 300)
.yoyo(true).start();
     	this.healthsound.play();
    	if(this.live<5){
    		this.live += 1;
    		this.liveLabel.text = 'x '+this.live;
    	}
    	else{
    		this.score += 2;
    		this.scoreLabel.text = 'score: '+this.score;
    	}
    },

    changeDirectionWhenCollideWall: function(stone,enemy){
    	if(enemy.body.touching.left){
	        enemy.body.velocity.y = this.grav;
    		enemy.body.velocity.x = this.enemymovingspeed;
    	}
    	else if(enemy.body.touching.right){
	        enemy.body.velocity.y = this.grav;
    		enemy.body.velocity.x = -this.enemymovingspeed;
    	}
    	else if(enemy.body.touching.up){
	        enemy.body.velocity.x = 0;
    		enemy.body.velocity.y = this.grav + this.enemymovingspeed;
    	}
    	else if(enemy.body.touching.down){
	        enemy.body.velocity.x = 0;
    		enemy.body.velocity.y = this.grav - this.enemymovingspeed;
    	}

    },

    changeEnemyMovingDirection: function(){
    	var grav = this.grav;
    	var speed = this.enemymovingspeed;
    	this.enemies.forEachAlive(function(anenemy){
    		var dir = direction[game.rnd.integerInRange(0,3)];
    		switch(dir){
	        	case 'w':
	        		anenemy.body.velocity.x = 0;
	        		anenemy.body.velocity.y = grav + speed;
	        		break;
	        	case 's':
	        		anenemy.body.velocity.x = 0;
	        		anenemy.body.velocity.y = grav - speed;
	        		break;
	        	case 'a':
	        		anenemy.body.velocity.y = grav;
	        		anenemy.body.velocity.x = -speed;
	        		break;	        	case 'd':
	        		anenemy.body.velocity.y = grav;
	        		anenemy.body.velocity.x = speed;
	        		break;
	        }
    	})
    },

    createWorld: function(){
        for(var x=0;x<20;x+=1){
        	for(var y=0;y<30;y+=1){
        		var char = initialMap[y][x];
	            if(char=='x'){
	                this.addOneStone(20*x,20*y);
	            }
	            else if(char=='o'){
	                this.addOneCoin(20*x,20*y);
	            }
	            else if(char=='!'){
	                this.addOneEnemy(20*x,20*y);
	            }
        	}
        }
        this.currentmap=mapset[this.mode][game.rnd.integerInRange(0,this.easymap)]
    },

    addGravity: function(element){
      element.body.velocity.y = this.grav;
    },

    updateWorld: function(){
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
       		this.currentmap=mapset[this.mode][game.rnd.integerInRange(0,this.easymap)];
            this.lineindex=9;
        }
    },

    gameOver: function(){
      thescore = this.score;
      this.StateText.text = ' GAME OVER \n Click to view ranking';
      this.StateText.visible = true;
      game.input.onTap.addOnce(this.goToRanking,this);

      this.player.kill();
    	this.happyBGM.stop();
    	this.trippyBGM.stop();
        //game.state.start('top10');
    },

    goToRanking: function(){
      game.state.start('top10');
    }

};


var initialMap = [
	"x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x               !  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x  o     o   o     x",
    "x  o     o   o     x",
    "x  o o o o   o     x",
    "x  o     o   o     x",
    "x  o     o   o     x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",
    "x                  x",];
