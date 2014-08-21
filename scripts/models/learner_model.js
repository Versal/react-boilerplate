function AppModel (attributes, options) {
  this.attributes = attributes || {};
  this.player = options.player;
  this.initPlayerListeners();
};

AppModel.prototype.initPlayerListeners = function () {
  this.player.on('learnerStateChanged', this.onLearnerStateChanged.bind(this));
};

AppModel.prototype.onLearnerStateChanged = function (attributes) {
  this.set(attributes);
};

AppModel.prototype.set = function (attributes) {
  var key;
  var keys = Object.keys(attributes);

  for (var i = 0; i < keys.length; i++) {
    key = attributes[ keys[i] ];
    if (key && attributes.hasOwnProperty(key)) {
      this.attributes[key] = attributes[key];
    }
  }
};

module.exports = AppModel;
