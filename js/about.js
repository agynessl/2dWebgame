var aboutState = {
	preload: function(){
		console.log('aboutState');
	},

	create: function(){
		game.add.button(125,500,'back2button',this.backToMenu,this,0,1,2);
	},

	backToMenu: function(){
		game.state.start('menu');
	}
};
