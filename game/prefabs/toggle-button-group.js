var ToggleButtonGroup = function(game) {
  Phaser.Group.call(this, game);
  this.game = game;
};

ToggleButtonGroup.prototype = Object.create(Phaser.Group.prototype);
ToggleButtonGroup.prototype.constructor = ToggleButtonGroup;

ToggleButtonGroup.prototype.createToggleButton = function(x, y, color, key, downKey, text, actionOnClick) {
  var button = new this.game.prefabs.ToggleButton(this.game, x, y, color, key, downKey, text, actionOnClick);
  button.onToggle.add(function(source) {
    if(source.toggled) {
      for (var child of this.children) {
        if (child != source && child.toggled) {
          child.toggle();
        }
      }
      this.selected = source;
    } else {
      this.selected = null;
    }
  }, this);
  this.add(button);
  return button;
}

module.exports = ToggleButtonGroup;

