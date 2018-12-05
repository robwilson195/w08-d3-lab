const Request = require('../helpers/request_helper.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new Request(this.url);
}

BucketList.prototype.bindEvents = function () {
  this.getData();
};

BucketList.prototype.getData = function () {
  this.request.get()
  .then((listItems) => {
    console.log(listItems);
  });
};

module.exports = BucketList;
