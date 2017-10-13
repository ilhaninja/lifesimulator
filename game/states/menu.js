var Menu;

Menu = function() {};

Menu.prototype = {

  preload: function() {},

  create: function() {
    var title, instructions, game = this.game, world = this.game.world, fonts = this.game.fonts;

    var title = game.add.text(world.centerX, 380, 'LIFE', fonts.large);
    var instructions = game.add.text(world.centerX, 420, 'TAP', fonts.medium);

    title.anchor.setTo(0.5, 0.5);
    instructions.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    var game = this.game;

    if (game.input.activePointer.justPressed()) {
      game.state.start('play');
    }
  }
};

module.exports = Menu;

