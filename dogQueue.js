const Queue = require('./Queue');

const dogQueue = new Queue();

dogQueue.enqueue(
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
);

dogQueue.enqueue(
  {
    imageURL: 'https://i.imgur.com/Fr9luGW.jpg',
    imageDescription: 'Beagle puppy with his head down has he fails to walk up stairs',
    name: 'Charlie Brown',
    sex: 'Male',
    age: 1,
    breed: 'Beagle',
    story: 'He does not know how to walk up stairs. His owner lived on the 8th floor.'
  }
);

dogQueue.enqueue(
  {
    imageURL: 'https://i.imgur.com/W7V6Q.jpg',
    imageDescription: 'A goldendoodle puppy sitting on a small bag of kibble in the front seat of a car.',
    name: 'Louise',
    sex: 'Female',
    age: 1,
    breed: 'Goldendoodle',
    story: 'Got lost on a road trip. Looking for a forever home.'
  }
);

module.exports = dogQueue;
