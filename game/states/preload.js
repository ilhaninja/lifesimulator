var Preload;

Preload = function() {
  this.asset = null;
  this.ready = false;
};

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    this.load.image('yeoman', 'assets/yeoman-logo.png');

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
    return this.asset.cropEnabled = false;
  },
  update: function() {
    if (!!this.ready) {
      return this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    return this.ready = true;
  }
};

module.exports = Preload;

