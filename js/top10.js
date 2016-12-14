//display the result
//update the top 10 list
var top10State = {
	preload: function(){
		console.log('In top10State');
		game.load.image('top10table','assets/rank.png');
	},

	create: function(){

		this.top10table = game.add.sprite(75,50,'top10table');
		this.names = game.add.group();
		this.scores = game.add.group();
		this.sendResult();
		this.generateList();
		this.getList();

		var playbutton = game.add.button(62,500,'playbutton',this.backToPlay,this,0,1,2);
		playbutton.scale.setTo(0.5,0.5);

		var backbutton = game.add.button(262,500,'backbutton',this.backToMenu,this,0,1,2);
		backbutton.scale.setTo(0.5,0.5);
	},

	generateList: function(){
		var i = 1;

		for(i =1; i < 11; i+=1){
			var nameLabel = game.add.text(100, 35*(i-1)+105, 'name' + i,
			{ font: '18px Arial', fill: '#826484' });
			var scoreLabel = game.add.text(220, 35*(i-1)+105, 'score' + i,
			{ font: '18px Arial', fill: '#826484' });

			this.names.add(nameLabel);
			this.scores.add(scoreLabel);
		}
	},

	getList: function(){
		var req = new XMLHttpRequest();

		req.addEventListener("load", function() {
	    game.state.states['top10'].buildList( JSON.parse(this.responseText));
	  });

		req.open('GET', '/top10list');
		req.send();
	},

	buildList: function(list){
		var i = 0;
		for(i =0; i< 10; i+= 1){
			this.names.getChildAt(i).text = list[i].name;
			this.scores.getChildAt(i).text = list[i].score;
		}
	},

	sendResult: function(){
		var req = new XMLHttpRequest();

	  req.addEventListener("load", function() {
	    game.state.states['top10'].getList()
	  });

	  req.open("POST", "/scorecheck", true);
	  req.send('name='+thename+ '&score=' + thescore);
	},

	backToMenu: function(){
		game.state.start('menu');
	},

	backToPlay: function(){
		game.state.start('play');
	}

};
