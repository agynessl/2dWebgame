var aboutState = {
	preload: function(){
		console.log('aboutState');
	},

	create: function(){
		game.add.text(105, 60, 'Programmers:',
        { font: '32px Arial', fill: '#826484' });
        game.add.text(155, 120, 'QiaoYu Liao',
        { font: '18px Arial', fill: '#826484' });
        game.add.text(165, 170, 'Jinan Hu',
        { font: '18px Arial', fill: '#826484' });
        game.add.text(175, 230, 'Art:',
        { font: '32px Arial', fill: '#826484' });
         game.add.text(165, 290, 'Jinan Hu',
        { font: '18px Arial', fill: '#826484' });
         game.add.text(150, 340, 'Sounds:',
        { font: '32px Arial', fill: '#826484' });
         game.add.text(145, 400, 'Freesound.org',
        { font: '18px Arial', fill: '#826484' });
		game.add.button(125,500,'back2button',this.backToMenu,this,0,1,2);
	},

	backToMenu: function(){
		game.state.start('menu');
	}
};
