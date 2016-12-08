var thename; 
var inputState = {

    preload: function() { 
        console.log('in inputState');
    },

    create: function() { 
    	
    	
        game.add.button(125,350,'playbutton',this.playgame,this,0,1,2);
    },

    playgame: function(){
    	game.state.start('play');
    }


};