var thename;
var inputState = {

    preload: function() {
        console.log('in inputState');
    },

    create: function() {

        this.nameInput = this.createInput(100, 60);
        //TODO: NEXT BUTTON
        game.add.button(125,450,'playbutton',this.toMenu,this,0,1,2);
    },

    createInput: function(x,y){
      var bmd = game.add.bitmapData(400, 50);
      var myInput = game.add.sprite(x, y, bmd);

      myInput.canvasInput = new CanvasInput({
        canvas: bmd.canvas,
        fontSize: 20,
        fontFamily: 'Arial',
        fontColor: '#212121',
        //fontWeight: 'bold',
        width: 200,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 3,
        boxShadow: '1px 1px 0px #fff',
        //innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        //placeHolder: 'Enter message here...'
      });
      myInput.inputEnabled = true;
      myInput.input.useHandCursor = true;
      myInput.events.onInputUp.add(this.inputFocus, this);

      return myInput;
    },

    inputFocus: function(sprite){
      sprite.canvasInput.focus();
    },

    toMenu: function(){
      thename = this.nameInput.canvasInput.value();
      console.log(thename);
    	game.state.start('menu');
    }


};
