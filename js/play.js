var playState = {
    preload: function(){
        console.log('In playstate');
    },

    create: function() { 
        
    },

    update: function() {
        
    },

    updateScore: function() {
        
    },

    gameOver: function() {
        
    },

    addEnemy: function() {
        // Pick an enemy from the group
        var enemy = this.enemies.getFirstDead();
        if (!enemy) {
            return;
        }

        // Randomly spawn one of two enemy (red or white) at the correct position
        var type = game.rnd.integerInRange(0, 1);
        if (type == 0) {
            enemy.frame = 0;
            enemy.reset(game.width/3, 0);
        }
        else {
            enemy.frame = 1;
            enemy.reset(game.width/3*2, 0);
        }

        // Init the enemy
        enemy.anchor.setTo(0.5, 1);
        enemy.body.gravity.y = 0;
        enemy.body.velocity.y = 300;
        enemy.checkWorldBounds = true;
        enemy.outOfBoundsKill = true;

        // Add a tween to make it move toward the player
        game.add.tween(enemy).to({x: game.width/2}, 1200).start();
    }
};
