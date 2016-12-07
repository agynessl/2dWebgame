var menuState = {
    preload: function(){
    	game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);

    	
	},

    create: function(){
    	game.add.button(game.width/2,game.height/2, 'button', this.entername, this, 2, 1, 0);
    },

    entername: function(){
        game.state.start('load');
    }
};


var top10State = {
	creat: function(){

	},
};


var inputState = {
	create: function(){

	},
};