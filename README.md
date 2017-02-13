# Hide and dodge 2D web game
CS4241 Webware final project

Developers:
Qiaoyu Liao & Jinan Hu

---------------------------------------------------------------------------
Tutorial:
Use 'up''down''left''right' key to play.
Health packs and coins are good thing.
Don't fall out of bounds(up/down) and don't touch the monster

---------------------------------------------------------------------------
Fonts End:
The whole game sits on the front end.

Map generator.
The maps of the game are predifined, there are in total 36 chuncks of map peices.
However, The sequence of the map is random. Moreover, there are some rules to pick a map.
There are 4 different maps set. Different map set has its own difficulty.
In the game, we used timer to count when should we load a new line of sprites and then read from the current line of the current map. When the current map is used up, depending on the current mode, the map generator will pick a random one from the proper map set.

Monster Movement:
Initially the monster will pick a direction among 'down','left','right'.
All monster will change its moving direction every 3 seconds.
After certain mode level(about 60 seconds), the monster will increase its speed, pressuring the player.


Collision and Out of bounds:
Among different objects, there are collicion/overlay checking. When the collision/overlay happens, some call back function will be called and the game world will change corresponding with the event.

----------------------------------------------------------------------------
Back End:
The username and scores are stored in the server.
At the end of each game, a request with user name and score will be send to server, server will update the top 10 score list.
Then a request with get list will get the top 10 score list from server.

----------------------------------------------------------------------------
Tools:
Node.js, Phaser
