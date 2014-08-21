var AppModel = require('./models/app_model'),
    LearnerModel = require('./models/learner_model');

function Gadget(options) {
  this.appModel = new AppModel({}, {
    player: options.player
  });

  this.learnerModel = new LearnerModel({}, {
    player: options.player
  });

  this.editable = false;
  this.initPlayerInteraction(options.player);
};

Gadget.prototype.initPlayerInteraction = function (player) {
  player.on('editableChanged', this.onEditableChanged.bind(this));

  player.startListening()
  player.watchBodyHeight()
};

Gadget.prototype.onEditableChanged = function (data) {
  this.editable = data.editable
};

var player = new VersalPlayerApi()
new Gadget({ player: player });

