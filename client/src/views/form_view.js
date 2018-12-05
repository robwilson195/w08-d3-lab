const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element) {
  this.element = element;
};

FormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newListItem = evt.target;
    PubSub.publish('FormView:new-item-submitted', newListItem);
    this.element.reset();
  });
};

module.exports = FormView;
