/** @jsx React.DOM */
var React = require('react');

var AppComponent = require('./components/app_component');

function Gadget(options) {
  this.el = options.el;
  this.player = options.player;
  React.renderComponent(<AppComponent player={this.player} editable={this.editable} />, this.el);
};

var player = new VersalPlayerAPI()
new Gadget({
  player: player,
  el: document.querySelector('.gadget-wrapper')
});

