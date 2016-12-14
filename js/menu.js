var menuState = {
    preload: function(){
    	game.load.spritesheet('playbutton', 'assets/play.png', 150, 100);
    	game.load.spritesheet('backbutton', 'assets/back.png', 150, 100);	
    	game.load.spritesheet('back2button', 'assets/back2.png', 150, 50);
    	game.load.spritesheet('aboutbutton', 'assets/about.png', 150, 100);
	},

    create: function(){
    	game.add.button(125,150,'playbutton',this.inputname,this,0,1,2);
    	game.add.button(125,350,'aboutbutton',this.displayabout,this,0,1,2);
    },

    inputname: function(){
    	//document.querySelector('canvas').setAttribute('hidden',true);
    	//document.getElementById('input').removeAttribute('hidden');
      // game.state.start('input');
      game.state.start('play');
    },

    displayabout: function(){
    	game.state.start('about');
    }

};
