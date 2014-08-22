function LearnerModel (attributes, options) {
  this.attributes = attributes || {};
  this.player = options.player;
  this.component = options.component;
  this.initPlayerListeners();
};

LearnerModel.prototype.initPlayerListeners = function () {
  this.player.on('learnerStateChanged', this.onLearnerStateChanged.bind(this));
};

LearnerModel.prototype.onLearnerStateChanged = function (attributes) {
  this.set(attributes);
};

LearnerModel.prototype.set = function (attributes) {
  var key;
  var keys = Object.keys(attributes);

  for (var i = 0; i < keys.length; i++) {
    key = attributes[ keys[i] ];
    this.attributes[key] = attributes[key];
  }

  this.component.setState({learnerState: this.attributes});
};


LearnerModel.prototype.sync = function () {
  this.player.setLearnerState(this.attributes);
};

module.exports = LearnerModel;
