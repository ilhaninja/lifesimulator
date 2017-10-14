var Menu;

Menu = function() {};

Menu.prototype = {

  preload: function() {},

  create: function() {
    var game = this.game, world = this.game.world, fonts = this.game.fonts;
    var title, subtitle, newGame, newGameText;

    var titleFont = Object.create(fonts.huge);
    titleFont.fill = game.colors.blue;

    var subtitleFont = Object.create(fonts.medium);
    subtitleFont.fill = game.colors.blue;

    new game.prefabs.NineSlice(game, world.centerX, world.centerY, 'grey', 'panel', 400, 240, 6);

    title = game.add.text(world.centerX, 380, 'LIFE', titleFont);
    subtitle = game.add.text(world.centerX, 420, 'SIMULATOR', subtitleFont);
    title.anchor.setTo(0.5, 0.5);
    subtitle.anchor.setTo(0.5, 0.5);

    var button = new game.prefabs.Button(game, world.centerX, 480, 'red', 'button-01', 'button-00', 'New Game', function() {
      game.state.start('play');
    });

  },

  update: function() {
  }
};

module.exports = Menu;

