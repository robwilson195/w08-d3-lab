const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // Index
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

  // Delete
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({_id: ObjectID(id)})
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

  // Create
  router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

// Update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  collection
  .updateOne({_id: ObjectID(id)}, {$set: updatedData})
  .then(() => collection.find().toArray())
  .then((docs) => res.json(docs))
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({status: 500, error: err});
  });
});

  return router;

};

module.exports = createRouter;
