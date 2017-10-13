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

    var greyLeft = game.add.sprite(world.centerX - 200, world.centerY, 'ui-grey', 'grey-panel-l.png');
    var greyRight = game.add.sprite(world.centerX + 200, world.centerY, 'ui-grey', 'grey-panel-r.png');
    var greyTop = game.add.sprite(world.centerX, world.centerY - 200, 'ui-grey', 'grey-panel-u.png');
    var greyTopLeft = game.add.sprite(world.centerX - 200, world.centerY - 200, 'ui-grey', 'grey-panel-ul.png');
    var greyTopRight = game.add.sprite(world.centerX + 200, world.centerY - 200, 'ui-grey', 'grey-panel-ur.png');
    var greyBottom = game.add.sprite(world.centerX, world.centerY + 200, 'ui-grey', 'grey-panel-b.png');
    var greyBottomLeft = game.add.sprite(world.centerX - 200, world.centerY + 200, 'ui-grey', 'grey-panel-bl.png');
    var greyBottomRight = game.add.sprite(world.centerX + 200, world.centerY + 200, 'ui-grey', 'grey-panel-br.png');
    var greyCenter = game.add.sprite(world.centerX, world.centerY, 'ui-grey', 'grey-panel-c.png');

    greyLeft.anchor.setTo(0, 0.5);
    greyRight.anchor.setTo(1, 0.5);
    greyTop.anchor.setTo(0.5, 0);
    greyBottom.anchor.setTo(0.5, 1);
    greyTopLeft.anchor.setTo(0, 0);
    greyTopRight.anchor.setTo(1, 0);
    greyBottomLeft.anchor.setTo(0, 1);
    greyBottomRight.anchor.setTo(1, 1);
    greyCenter.anchor.setTo(0.5, 0.5);

    greyLeft.height = 388;
    greyRight.height = 388;
    greyTop.width = 388;
    greyBottom.width = 388;
    greyCenter.width = 388;
    greyCenter.height = 388;

    title = game.add.text(world.centerX, 400, 'LIFE', titleFont);
    subtitle = game.add.text(world.centerX, 460, 'A SIMULATOR', subtitleFont);

    title.anchor.setTo(0.5, 0.5);
    subtitle.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    var game = this.game;

    if (game.input.activePointer.justPressed()) {
      game.state.start('play');
    }
  }
};

module.exports = Menu;

