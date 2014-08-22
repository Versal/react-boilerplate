/** @jsx React.DOM */
var React = require('react');

var AppComponent = require('./components/app_component');

function Gadget(options) {
  this.el = options.el;
  this.player = options.player;

  this.editable = false;
  this.initPlayerInteraction(options.player);
  this.render();
};

Gadget.prototype.initPlayerInteraction = function (player) {
  player.on('editableChanged', this.onEditableChanged.bind(this));
};

Gadget.prototype.onEditableChanged = function (data) {
  this.editable = data.editable;
  this.render();
};

Gadget.prototype.render = function () {
  React.renderComponent(<AppComponent player={this.player} editable={this.editable} />, this.el);
};

var player = new VersalPlayerAPI()
new Gadget({
  player: player,
  el: document.querySelector('.gadget-wrapper')
});

