function AppModel (attributes, options) {
  this.attributes = attributes || {};
  this.player = options.player;
  this.initPlayerListeners();
};

AppModel.prototype.initPlayerListeners = function () {
  this.player.on('attributesChanged', this.onAttributesChanged.bind(this));
};

AppModel.prototype.setComponent = function(component) {
  this.component = component;
};

AppModel.prototype.onAttributesChanged = function (attributes) {
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

  this.sync();
};

AppModel.prototype.sync = function () {
  if (this.component && this.component.isMounted()) {
    this.component.setProps({config: this.attributes})
  }
};

module.exports = AppModel;
