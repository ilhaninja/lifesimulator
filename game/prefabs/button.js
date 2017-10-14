var Button = function(game, x, y, color, key, downKey, text, actionOnClick) {
  Phaser.Group.call(this, game);

  var atlas = 'ui-'+color;
  var up = color+'-'+key+'.png';
  var down = color+'-'+downKey+'.png';

  this.button = game.make.button(x, y, atlas, actionOnClick, this, up, up, down, up);
  this.label = game.make.text(x, y, text, game.fonts.mediumThin);

  this.button.anchor.setTo(0.5, 0.5);
  this.label.anchor.setTo(0.5, 0.5);

  this.add(this.button);
  this.add(this.label);

};

Button.prototype = Object.create(Phaser.Group.prototype);
Button.prototype.constructor = Button;

module.exports = Button;


