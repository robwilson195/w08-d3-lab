const PubSub = require('../helpers/pub_sub.js');

const ListItemView = function (listItem, parentElement) {
  this.listItem = listItem;
  this.parentElement = parentElement;
};

ListItemView.prototype.render = function () {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('list-item');
  this.parentElement.appendChild(itemDiv);

  const description = document.createElement('p');
  description.textContent = this.listItem.description;
  itemDiv.appendChild(description);

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  if (this.listItem.completed) {
    checkBox.setAttribute('checked', true);
  };
  checkBox.value = this.listItem.id;
  itemDiv.appendChild(checkBox);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.value = this.listItem._id;
  deleteButton.textContent = 'X'
  deleteButton.addEventListener('click', (evt) => {
    PubSub.publish('ListItemView:delete-confirmed', evt.target.value);
  });
  itemDiv.appendChild(deleteButton);

};

module.exports = ListItemView;
