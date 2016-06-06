var react = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id":1, "name": "ham" },
  {"id":2, "name": "chese" },
  {"id":3, "name": "potatoes" },
];

var List = react.createClass({
  render: function(){
    var ListItems = ingredients.map(function(item){

      /**Here the "ingredient" refers to the ingredient in ListItem.js*/
      return <ListItem key={item.id} ingredient={item.name}/>
    });

    return (<ul>{ListItems}</ul>);
  }
});
