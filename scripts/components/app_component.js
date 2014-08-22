/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
  save: function (attributes) {
    if (!this.props.model) {
      return;
    }
    this.props.model.set(attributes);
  },

  render: function() {
    return <div>Test</div>;
  }
})
