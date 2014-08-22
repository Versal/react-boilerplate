/** @jsx React.DOM */
var React = require('react');
var AppModel = require('../models/app_model'),
    LearnerModel = require('../models/learner_model');

module.exports = React.createClass({
  save: function (attributes) {
    if (!this.props.model) {
      return;
    }
    this.props.model.set(attributes);
  },

  componentDidMount: function() {
    var player = this.props.player;
    this.appModel = new AppModel({}, {
      player: player,
      component: this
    });

    this.learnerModel = new LearnerModel({}, {
      player: player,
      component: this
    });

    player.startListening();
    player.watchBodyHeight();
  },

  render: function() {
    console.log(this.state);
    return <div>{this.props.editable ? "author" : "learn"}</div>;
  }
})
