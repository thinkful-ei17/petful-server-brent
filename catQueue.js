const queue = require('./Queue');

const catQueue = new queue();

catQueue.enqueue(
  {
    imageURL: 'https://i.imgur.com/qltujcah.jpg',
    imageDescription: 'Cat eating banana',
    name: 'Banana man',
    sex: 'Female',
    age: 5,
    breed: 'Orange thing',
    story: 'Ate owners banana'
  }
);

catQueue.enqueue(
  {
    imageURL: 'https://www.vetbabble.com/wp-content/uploads/2016/11/hiding-cat.jpg',
    imageDescription: 'A cat, I think?',
    name: 'Secret hider cat',
    sex: 'Female',
    age: 1,
    breed: 'Soft cat',
    story: 'Hid under something so the owners thought she ran away.'
  }
);

catQueue.enqueue(
  {
    imageURL: 'https://i.imgflip.com/kzg66.jpg',
    imageDescription: 'Cat staring off into the distance',
    name: 'Theodore',
    sex: 'Male',
    age: 58,
    breed: 'Fuzzy guy',
    story: 'Became too heavy for the owner to lift.'
  }
);

module.exports = catQueue;
