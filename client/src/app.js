const GridView = require('./views/grid_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {

  const gridDiv = document.querySelector('.grid-view');
  const gridView = new GridView(gridDiv);
  gridView.bindEvents();

  const url = 'http://localhost:3000/api/bucketlist';
  const bucketList = new BucketList(url);
  bucketList.bindEvents();





})
