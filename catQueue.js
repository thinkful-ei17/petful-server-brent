const queue = require('./Queue');

const catQueue = new queue();

catQueue.enqueue(
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street.'
  }
);

catQueue.enqueue(
  {
    imageURL: 'https://i.imgur.com/KSFeIO1.jpg',
    imageDescription: 'Gray cat standing on her hind legs on the bed',
    name: 'Einstein',
    sex: 'Female',
    age: 3,
    breed: 'American Shorthair',
    story: 'Got too smart for her owner.'
  }
);

catQueue.enqueue(
  {
    imageURL: 'https://i.imgur.com/S16mvmE.jpg',
    imageDescription: 'Gray maine coon cat with fur shaped to make it look like a little lion',
    name: 'Simba',
    sex: 'Male',
    age: 4,
    breed: 'Maine Coon',
    story: 'Ran away after getting such a ridiculous hair cut.'
  }
);

module.exports = catQueue;
