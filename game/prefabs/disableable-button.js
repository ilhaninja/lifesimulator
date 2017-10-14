var DisableableButton = function(game, x, y, color, key, downKey, disabledKey, text, actionOnClick) {
  Phaser.Group.call(this, game);

  var atlas = 'ui-'+color;
  this.upKey = color+'-'+key+'.png';
  this.downKey = color+'-'+downKey+'.png';
  this.disabledKey = color+'-'+disabledKey+'.png';

  this.button = game.make.button(x, y, atlas, actionOnClick, this, this.upKey, this.upKey, this.downKey, this.upKey);
  this.sprite = game.make.sprite(x, y, 'ui-grey', 'grey-button-15.png')
  this.label = game.make.text(x, y, text, game.fonts.mediumThin);

  this.button.anchor.setTo(0.5, 0.5);
  this.sprite.anchor.setTo(0.5, 0.5);
  this.label.anchor.setTo(0.5, 0.5);

  this.add(this.button);
  this.add(this.label);

};

DisableableButton.prototype = Object.create(Phaser.Group.prototype);
DisableableButton.prototype.constructor = DisableableButton;

DisableableButton.prototype.disable = function() {
  this.disabled = true;
  this.enabled = false;
  this.remove(this.label);
  this.remove(this.button);
  this.add(this.sprite);
  this.add(this.label);
}

DisableableButton.prototype.enable = function() {
  this.enabled = true;
  this.disabled = false;
  this.remove(this.label);
  this.remove(this.sprite);
  this.add(this.button);
  this.add(this.label);
}

module.exports = DisableableButton;


