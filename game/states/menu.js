var Menu;

Menu = function() {};

Menu.prototype = {

  preload: function() {},

  create: function() {
    var title, subtitle, game = this.game, world = this.game.world, fonts = this.game.fonts;

    var titleFont = Object.create(fonts.huge);
    titleFont.fill = game.colors.blue;

    var subtitleFont = Object.create(fonts.medium);
    subtitleFont.fill = game.colors.blue;

    window.greyPanel = new game.prefabs.NineSlice(game, world.centerX, world.centerY, 'grey', 'panel', 400, 240, 6);

    title = game.add.text(world.centerX, 400, 'LIFE', titleFont);
    subtitle = game.add.text(world.centerX, 460, 'A SIMULATOR', subtitleFont);
    
    title.anchor.setTo(0.5, 0.5);
    subtitle.anchor.setTo(0.5, 0.5);
  },

  update: function() {
  }
};

module.exports = Menu;

