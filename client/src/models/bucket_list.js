const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new Request(this.url);
}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:new-item-submitted', (evt) => {
    this.postItem(evt.detail);
  })
  this.getData();
};

BucketList.prototype.postItem = function (newItem) {
  const fullItem = {description: newItem.description,
                    completed: false};
  console.log(fullItem);
};

BucketList.prototype.getData = function () {
  this.request.get()
  .then((listItems) => {
    PubSub.publish('BucketList:list-ready', listItems)
  });
};

module.exports = BucketList;
