var Preload;

Preload = function() {
  this.asset = null;
  this.ready = false;
};

Preload.prototype = {
  preload: function() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    var characterAssets = ['face', 'hair', 'pants', 'shirts', 'shoes', 'skin'];
    var tileAssets = ['building-tiles', 'city-details', 'city-tiles', 'landscape-tiles', 'vehicles'];
    var uiAssets = ['blue', 'green', 'grey', 'items', 'red', 'tab-controls', 'yellow'];

    for (let asset of characterAssets) {
      this.load.atlasXML('character-'+asset, 'assets/character/'+asset+'.png', 'assets/character/'+asset+'.xml');
    }
    for (let asset of tileAssets) {
      this.load.atlasXML(asset, 'assets/tiles/'+asset+'.png', 'assets/tiles/'+asset+'.xml');
    }
    for (let asset of uiAssets) {
      this.load.atlasXML('ui-'+asset, 'assets/ui/'+asset+'.png', 'assets/ui/'+asset+'.xml');
    }
  },
  create: function() {
    this.loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '', this.game.fonts.small);
    this.loadingText.anchor.setTo(0.5, 0.5);
    this.counter = 0;
    this.game.time.events.loop(Phaser.Timer.SECOND/3, function() {
      this.counter++;
      if (this.counter > 4) {
        this.counter = 0;
      }
    }, this);
  },
  update: function() {
    this.loadingText.text = '';
    this.loadingText.text = this.loadingText.text + Array(this.counter).join('.');
    if (!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    return this.ready = true;
  }
};

module.exports = Preload;

