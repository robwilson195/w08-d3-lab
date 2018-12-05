const PubSub = require('../helpers/pub_sub.js');
const ListItemView = require('./list_item_view.js');
const GridView = function (container) {

  this.container = container;

}

GridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:list-ready', (evt) => {
    this.render(evt.detail);
  })
};

GridView.prototype.render = function (listItems) {
  this.container.innerHTML = "";
  listItems.forEach((listItem) => {
    const newItemView = new ListItemView(listItem, this.container);
    newItemView.render();
  });
};

module.exports = GridView;
