/** @jsx React.DOM */
var React = require('react');

var AppModel = require('./models/app_model'),
    LearnerModel = require('./models/learner_model'),
    AppComponent = require('./components/app_component');

function Gadget(options) {
  this.el = options.el;
  this.appModel = new AppModel({}, {
    player: options.player
  });

  this.learnerModel = new LearnerModel({}, {
    player: options.player
  });

  this.appComponent = new AppComponent({
    appModel: this.appModel,
    LearnerModel: this.learnerModel
  });

  this.learnerModel.setComponent(this.appComponent);
  this.appModel.setComponent(this.appComponent);

  this.editable = false;
  this.initPlayerInteraction(options.player);
  this.render();
};

Gadget.prototype.initPlayerInteraction = function (player) {
  player.on('editableChanged', this.onEditableChanged.bind(this));

  player.startListening();
  player.watchBodyHeight();
};

Gadget.prototype.onEditableChanged = function (data) {
  this.editable = data.editable
};

Gadget.prototype.render = function () {
  React.renderComponent(<AppComponent appModel={this.appModel} learnerModel={this.learnerModel} />, this.el);
};

var player = new VersalPlayerAPI()
new Gadget({
  player: player,
  el: document.querySelector('.gadget-wrapper')
});

