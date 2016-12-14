var bootState = {

    preload: function() {
        // Game scaling on mobile
        if (!game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.setMinMax(game.width/2, game.height/2, game.width, game.height);
        }

        // Put the game on the middle of the screen
        game.scale.maxWidth = this.game.width*scaler;
        game.scale.maxHeight = this.game.height*scaler;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        // Game settings
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        game.stage.backgroundColor = '#ccfeff';
    },

    create: function() {
        game.state.start('load');
    },
};
