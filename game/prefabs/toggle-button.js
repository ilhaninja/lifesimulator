var ToggleButton = function(game, x, y, color, key, downKey, text, actionOnClick) {
  Phaser.Group.call(this, game);

  var atlas = 'ui-'+color;

  this.upKeyActual = color+'-'+key+'.png';
  this.downKeyActual = color+'-'+downKey+'.png';

  this.toggled = false;
  this.onToggle = new Phaser.Signal();

  var onClick = function() {
    this.toggle();
    actionOnClick.call(this);
  }

  this.button = game.make.button(x, y, atlas, onClick, this);
  this.button.frameName = this.upKeyActual;
  this.label = game.make.text(x, y, text, game.fonts.mediumThin);

  this.button.anchor.setTo(0.5, 0.5);
  this.label.anchor.setTo(0.5, 0.5);

  this.add(this.button);
  this.add(this.label);

};

ToggleButton.prototype = Object.create(Phaser.Group.prototype);
ToggleButton.prototype.constructor = ToggleButton;

ToggleButton.prototype.toggle = function() {
  this.toggled = !this.toggled;
  if(this.toggled) {
    this.button.frameName = this.downKeyActual;
  } else {
    this.button.frameName = this.upKeyActual;
  }
  this.onToggle.dispatch(this);
};

module.exports = ToggleButton;


