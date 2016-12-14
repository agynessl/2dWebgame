//display the result
//update the top 10 list
var top10State = {
	preload: function(){
		console.log('In top10State')
	},

	create: function(){
		//this.nameLabel = game.add.text(30, 5, 'Name1',
		//{ font: '18px Arial', fill: '#826484' });
		this.getList();
	},

	getList: function(){
		var req = new XMLHttpRequest();

		req.addEventListener("load", function() {
	    buildList( JSON.parse(this.responseText));
	  });

		req.open('GET', '/top10list');
		req.send();
	},

};

function getList(){
	var req = new XMLHttpRequest();

	req.addEventListener("load", function() {
    buildList( JSON.parse(this.responseText))
  });

	req.open('GET', '/top10list');
	req.send();
};

function buildList(list){
	game.nameLabel1 = game.add.text(30, 5, list[0].name,
	{ font: '18px Arial', fill: '#826484' });
	game.scoreLabel1 = game.add.text(90, 5, list[0].score,
	{ font: '18px Arial', fill: '#826484' });

	game.nameLabel2 = game.add.text(30, 30, list[1].name,
	{ font: '18px Arial', fill: '#826484' });
	game.nameLabel3 = game.add.text(30, 55, list[2].name,
	{ font: '18px Arial', fill: '#826484' });
	game.nameLabel4 = game.add.text(30, 80, list[3].name,
	{ font: '18px Arial', fill: '#826484' });
	game.nameLabel5 = game.add.text(30, 105, list[4].name,
	{ font: '18px Arial', fill: '#826484' });
	game.nameLabel6 = game.add.text(30, 130, list[5].name,
	{ font: '18px Arial', fill: '#826484' });
	game.nameLabel7 = game.add.text(30, 155, list[6].name,
	{ font: '18px Arial', fill: '#826484' });
};

function sendResult(){
	var req = new XMLHttpRequest();

  req.addEventListener("load", function() {
    getList()
  });

  req.open("POST", "/add", true);
  req.send('newclass='+div.value);
}
