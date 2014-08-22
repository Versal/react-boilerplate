/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {editable: false};
  },

  setAttributes: function (attributes) {
    this.props.player.setAttributes(this.state.attributes);
  },

  setLearnerState: function (learnerState) {
    this.props.player.setLearnerState(this.state.learnerState);
  },

  onAttributesChanged: function (attributes) {
    this.setState({attributes: attributes});
  },

  onLearnerStateChanged: function (learnerState) {
    this.setState({learnerState: learnerState});
  },

  onEditableChanged: function (data) {
    this.setState({editable: data.editable});
  },

  componentDidMount: function() {
    player.startListening();
    player.watchBodyHeight();
  },

  componentWillMount: function() {
    this.props.player.on('attributesChanged', this.onAttributesChanged.bind(this))
    this.props.player.on('learnerStateChanged', this.onLearnerStateChanged.bind(this))
    this.props.player.on('editableChanged', this.onEditableChanged.bind(this));
  },

  render: function() {
    return <div>{this.state.editable ? "author" : "learn"}</div>;
  }
})
