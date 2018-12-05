const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {

  const url = 'http://localhost:3000/api/bucketlist';
  const bucketList = new BucketList(url);
  bucketList.bindEvents();





})
