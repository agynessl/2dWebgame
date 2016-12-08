//new game

//start state

//main state game

// var mainState= {
//   preload: function(){
//
//     //load the bird
//     game.load.image('bird','assets/bird.png');
//     game.load.image('pipe','assets/pipe.png');
//
//   },
//
//   create: function(){
//
//     game.stage.backgroundColor = '#71c5cf';
//
//     game.physics.startSystem(Phaser.Physics.ARCADE);
//
//     //sprite and group difference?
//     this.bird = game.add.sprite(100, 245, 'bird');
//     //set the physics as arcade
//     game.physics.arcade.enable(this.bird);
//     //gravity
//     this.bird.body.gravity.y = 1000;
//
//     //up to jump
//     var spaceKey = game.input.keyboard.addKey(
//                     Phaser.Keyboard.SPACEBAR);
//     spaceKey.onDown.add(this.jump, this);
//
//
//     this.pipes = game.add.group();
//     //loop to create the pipes
//     this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
//
//     //score and show score
//     this.score = 0;
//     this.labelScore = game.add.text(20, 20, "0",
//     { font: "30px Arial", fill: "#ffffff" });
//
//     //set bird anchor for rotation
//     this.bird.anchor.setTo(-0.2, 0.5);
//
//   },
//
//   update: function(){
//     //restart if it is out of bound
//     if (this.bird.y < 0 || this.bird.y > 490)
//        this.restartGame();
//
//     //when collison, restart game
//     game.physics.arcade.overlap(
//     this.bird, this.pipes, this.hitPipe, null, this);
//
//     //bird slowly rotate down
//     if (this.bird.angle < 20)
//     this.bird.angle += 1;
//
//   },
//
//   restartGame: function(){
//
//     game.state.start('main');
//
//   },
//
//   jump: function(){
//
//     if (this.bird.alive == false)
//     return;
//
//     this.bird.body.velocity.y = -350;
//
//     // jump animation
//     var animation = game.add.tween(this.bird);
//     // Change the angle of the bird to -20° in 100 milliseconds
//     animation.to({angle: -20}, 100);
//     animation.start();
//
//   },
//
//   addRowOfPipes: function(){
//
//     //random the hole 1-5
//     var hole = Math.floor(Math.random() * 5) + 1;
//
//     //add pipes
//     for (var i = 0; i < 8; i++)
//         if (i != hole && i != hole + 1)
//             this.addOnePipe(400, i * 60 + 10);
//
//     this.score += 1;
//     this.labelScore.text = this.score;
//
//   },
//
//   addOnePipe: function(x, y){
//
//     var pipe = game.add.sprite(x, y, 'pipe');
//
//     this.pipes.add(pipe);
//
//     game.physics.arcade.enable(pipe);
//
//     //move left
//     pipe.body.velocity.x = -200;
//
//     //kill pipe when it is out of world bounds
//     pipe.checkWorldBounds = true;
//     pipe.outOfBoundsKill = true;
//   },
//
//   hitPipe: function() {
//     // If the bird has already hit a pipe, do nothing
//     // It means the bird is already falling off the screen
//     if (this.bird.alive == false)
//         return;
//
//     // Set the alive property of the bird to false
//     this.bird.alive = false;
//
//     // Prevent new pipes from appearing
//     game.time.events.remove(this.timer);
//
//     // Go through all the pipes, and stop their movement
//     this.pipes.forEach(function(p){
//         p.body.velocity.x = 0;
//     }, this);
// },
//
// };
//
// var game = new Phaser.Game(400,490);
//
// game.state.add('main', mainState);
//
// game.state.start('main');
