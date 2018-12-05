use bucketList;
db.dropDatabase();

db.buckets.insertMany([
  {description: "Go to Paris",
  completed: false},
  {description: "Do a parachute jump",
  completed: false}
]);
