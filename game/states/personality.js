var Personality;

Personality = function() {};

Personality.prototype = {

  create: function() {
    var game = this.game, world = this.game.world, fonts = this.game.fonts;
    new game.prefabs.NineSlice(game, world.centerX, world.centerY, 'grey', 'panel', 420, 800, 6);
  },

  update: function() {}

};

module.exports = Personality;

