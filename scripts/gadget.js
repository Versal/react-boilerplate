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
  React.renderComponent(<AppComponent />, this.el);
};

var player = new VersalPlayerAPI()
new Gadget({
  player: player,
  el: document.querySelector('.gadget-wrapper')
});

