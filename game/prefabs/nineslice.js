var NineSlice = function(game, x, y, color, key, width, height, gutter) {
  Phaser.Group.call(this, game);

  var atlas = 'ui-'+color;
  var frame = color+'-'+key;
  var ext = '.png';

  var suffixes = [
    ['ul', 'u', 'ur'],
    ['l', 'c', 'r'],
    ['bl', 'b', 'br']
  ];

  var anchors = [
    [[ 0 , 0 ], [0.5,  0 ], [ 1 ,  0 ]],
    [[ 0 ,0.5], [0.5, 0.5], [ 1 , 0.5]],
    [[ 0 , 1 ], [0.5,  1 ], [ 1 ,  1 ]]
  ];

  var w = x+width/2, h = y+height/2, wn = x-width/2, hn = y-height/2;
  var centers = [
    [[wn,hn], [ x,hn], [ w,hn]],
    [[wn, y], [ x, y], [ w, y]],
    [[wn, h], [ x, h], [ w, h]]
  ];


  var g = gutter;
  var w = width - 2 * g;
  var h = height -2 * g;
  var sizes = [
    [[g,g],[w,g],[g,g]],
    [[g,h],[w,h],[g,h]],
    [[g,g],[w,g],[g,g]]
  ];

  var sprites = [[],[],[]];
  for (var i=0; i<3; i++) {
    for (var j=0; j<3; j++) {
      sprites[i][j] = this.create(centers[i][j][0], centers[i][j][1], atlas, frame+'-'+suffixes[i][j]+ext);
      sprites[i][j].anchor.setTo(anchors[i][j][0], anchors[i][j][1]);
      sprites[i][j].width = sizes[i][j][0];
      sprites[i][j].height= sizes[i][j][1];
    }
  }

};

NineSlice.prototype = Object.create(Phaser.Group.prototype);
NineSlice.prototype.constructor = NineSlice;

module.exports = NineSlice;

