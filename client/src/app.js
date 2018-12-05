const GridView = require('./views/grid_view.js');
const BucketList = require('./models/bucket_list.js');
const FormView = require('./views/form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const formElement = document.querySelector('.new-item-form');
  const formView = new FormView(formElement);
  formView.bindEvents();

  const gridDiv = document.querySelector('.grid-view');
  const gridView = new GridView(gridDiv);
  gridView.bindEvents();

  const url = 'http://localhost:3000/api/bucketlist';
  const bucketList = new BucketList(url);
  bucketList.bindEvents();





})
