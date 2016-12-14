//display the result
//update the top 10 list
var name = 'tempUser';
var score = 403;

var top10State = {
	preload: function(){
		console.log('In top10State')
	},

	create: function(){

		this.names = game.add.group();
		this.scores = game.add.group();
		//this.sendResult();
		this.generateList();
		this.getList();

	},

	generateList: function(){
		var i = 1;

		for(i =1; i < 11; i+=1){
			var nameLabel = game.add.text(30, 5 + 30 * (i-1), 'name' + i,
			{ font: '18px Arial', fill: '#826484' });
			var scoreLabel = game.add.text(120, 5 + 30 * (i-1), 'score' + i,
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
	  req.send('name='+name+ '&score=' + score);
	}

};
