var SexAndGender;

SexAndGender = function() {};

SexAndGender.prototype = {
  create: function() {
    var game = this.game, world = this.game.world, fonts = this.game.fonts;
    var nameTitle, sexTitle, genderTitle;
    var maleButton, femaleButton, cisButton, transButton;
    
    new game.prefabs.NineSlice(game, world.centerX, world.centerY, 'grey', 'panel', 420, 800, 6);

    var titleFont = Object.create(fonts.medium);
    titleFont.fill = game.colors.black;

    nameTitle = game.add.text(world.centerX, 80, 'Choose your Name', titleFont);
    nameTitle.anchor.setTo(0.5, 0.5);

    this.nameInput = game.add.inputField(80, 120, {
      font: game.fonts.mediumThin.font,
      fill: game.colors.black,
      width: 320,
      placeHolder: 'name'
    });

    sexTitle = game.add.text(world.centerX, 190, 'Choose your Sex', titleFont);
    sexTitle.anchor.setTo(0.5, 0.5);

    this.sexButtonGroup = new game.prefabs.ToggleButtonGroup(game);
    
    maleButton = this.sexButtonGroup.createToggleButton(world.centerX, 250, 'blue', 'button-00', 'button-03', 'Male', function() {
    });
    
    femaleButton = this.sexButtonGroup.createToggleButton(world.centerX, 310, 'green', 'button-00', 'button-03', 'Female', function() {
    });

    genderTitle = game.add.text(world.centerX, 380, 'Choose your Gender', titleFont);
    genderTitle.anchor.setTo(0.5, 0.5);

    this.genderButtonGroup = new game.prefabs.ToggleButtonGroup(game);

    cisButton = this.genderButtonGroup.createToggleButton(world.centerX, 440, 'red', 'button-11', 'button-00', 'Cis', function() {
    });
    
    transButton = this.genderButtonGroup.createToggleButton(world.centerX, 500, 'yellow', 'button-00', 'button-03', 'Trans', function() {
    });

    this.goButton = new game.prefabs.DisableableButton(game, world.centerX, 680, 'red', 'button-11', 'button-00', 'button-10', 'GO!', function() {
      this.game.state.start('personality');
    });
    this.goButton.disable();
  },
  update: function() {
    if (this.sexButtonGroup && this.genderButtonGroup) {
      if (this.sexButtonGroup.selected && this.genderButtonGroup.selected && this.goButton && this.nameInput.value.length > 0) {
        this.goButton.enable();
      } else {
        this.goButton.disable();
      }
    }
  },
  clickListener: function() {
  }
};

module.exports = SexAndGender;

