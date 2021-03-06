window.onload = function() {
  var game;

  game = new Phaser.Game(480, 854, Phaser.AUTO, 'lifesim');

  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));

  game.colors = {
    white: '#FFF',

    blue: '#51B7E4',
    green: '#8BDE67',
    grey: '#EEEEEE',
    red: '#F8813E',
    yellow: '#FED856',

    pastelBlue: '#B3D6C6',
    pastelGreen: '#CFFFB3',
    pastelRed: '#D8946C',
    pastelYellow: '#F9E193',

    muteBlue: '#347996',
    muteGreen: '#519932',
    muteGrey: '#6D6D6D',
    muteRed: '#99491B',
    muteYellow: '#E6C229'
  };

  game.fonts = {
    small: {
      font: '16px kenvector-future',
      fill: game.colors.white,
      align: 'center'
    },
    medium: {
      font: '24px kenvector-future',
      fill: game.colors.white,
      align: 'center'
    },
    large: {
      font: '32px kenvector-future',
      fill: game.colors.white,
      align: 'center'
    },
    huge: {
      font: '64px kenvector-future',
      fill: game.colors.white,
      align: 'center'
    }
  };

  game.prefabs = {
    NineSlice: require('./prefabs/nineslice')
  };

  game.state.start('boot');
};

