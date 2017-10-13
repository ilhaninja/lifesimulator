var Boot;

Boot = function() {};

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    var game = this.game;

    // preload fonts
    game.add.text(0, 0, ' ', { font: '1px kenvector-future' } );
    game.add.text(0, 0, ' ', { font: '1px kenvector-future-thin' } );

    game.stage.backgroundColor = this.game.colors.blue;

    game.input.maxPointers = 1;

    game.state.start('preload');
  }
};

module.exports = Boot;

