var Menu;

Menu = function() {};

Menu.prototype = {

  preload: function() {},

  create: function() {
    var game = this.game, world = this.game.world, fonts = this.game.fonts;
    var title, subtitle, newGame, newGameText;

    this.graphics = game.add.graphics(0, 0);

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

    this.points = [];

    for (var i=0; i<8; i++) {
      this.points[i] = [
        new Phaser.Point(world.centerX - 120, -120),
        new Phaser.Point(world.centerX + 120, -120)
      ];
      this.points[i][0].rotate(world.centerX, world.centerY, 45 * (i), true);
      this.points[i][1].rotate(world.centerX, world.centerY, 45 * (i), true);
    }

    this.center = new Phaser.Point(world.centerX, world.centerY);

  },

  update: function() {
    var graphics = this.graphics, angle = this.angle, hexColors = this.game.hexColors, math = this.game.math, world = this.game.world;

    graphics.clear();
    graphics.beginFill(this.game.hexColors.pastelBlue);

    for (var i=0; i<this.points.length; i++) {
      this.points[i][0].rotate(world.centerX, world.centerY, 0.25, true);
      this.points[i][1].rotate(world.centerX, world.centerY, 0.25, true);
      graphics.drawPolygon([this.points[i][0], this.points[i][1], this.center]);
    }

    graphics.endFill();
  }
};

module.exports = Menu;

