function AppModel (attributes, options) {
  this.attributes = attributes || {};
  this.player = options.player;
  this.component = options.component;
  this.initPlayerListeners();
};

AppModel.prototype.initPlayerListeners = function () {
  this.player.on('attributesChanged', this.onAttributesChanged.bind(this));
};


AppModel.prototype.onAttributesChanged = function (attributes) {
  this.set(attributes);
};

AppModel.prototype.set = function (attributes) {
  var key;
  var keys = Object.keys(attributes);

  for (var i = 0; i < keys.length; i++) {
    key = attributes[ keys[i] ];
    this.attributes[key] = attributes[key];
  }
  this.component.setState({ config: this.attributes });
};

AppModel.prototype.sync = function () {
  this.player.setAttributes(this.attributes);
};

module.exports = AppModel;
