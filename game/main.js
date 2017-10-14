window.onload = function() {
  var game;

  game = new Phaser.Game(480, 854, Phaser.AUTO, 'lifesim');

  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));

  game.hexColors = {
    white: 0xFFF,

    blue: 0x51B7E4,
    green: 0x8BDE67,
    grey: 0xEEEEEE,
    red: 0xF8813E,
    yellow: 0xFED856,

    pastelBlue: 0x79C8EA,
    pastelGreen: 0xCFFFB3,
    pastelRed: 0xD8946C,
    pastelYellow: 0xF9E193,

    muteBlue: 0x347996,
    muteGreen: 0x519932,
    muteGrey: 0x6D6D6D,
    muteRed: 0x99491B,
    muteYellow: 0xE6C229
  };

  game.colors = {
    white: '#FFF',

    blue: '#51B7E4',
    green: '#8BDE67',
    grey: '#EEEEEE',
    red: '#F8813E',
    yellow: '#FED856',

    pastelBlue: '#79C8EA',
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
    },
    smallThin: {
      font: '16px kenvector-future-thin',
      fill: game.colors.white,
      align: 'center'
    },
    mediumThin: {
      font: '24px kenvector-future-thin',
      fill: game.colors.white,
      align: 'center'
    },
    largeThin: {
      font: '32px kenvector-future-thin',
      fill: game.colors.white,
      align: 'center'
    },
    hugeThin: {
      font: '64px kenvector-future-thin',
      fill: game.colors.white,
      align: 'center'
    }
  };

  game.prefabs = {
    NineSlice: require('./prefabs/nineslice'),
    Button: require('./prefabs/button')
  };

  game.state.start('boot');
};

