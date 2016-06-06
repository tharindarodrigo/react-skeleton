var react = require('react');
var ListItem = react.createClass({
  render: function(){
    return (
      <h4>{this.props.ingredient}</h4>
    );
  }
});

module.exports = ListItem;
