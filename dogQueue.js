const queue = require('./Queue');

const dogQueue = new queue();

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
    imageURL: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/maltese-dog-breed-picture/thumbs/thumbs_1-runningpuppy.jpg',
    imageDescription: 'Maltese running super fast',
    name: 'Beetlejuice',
    sex: 'Male',
    age: 1,
    breed: 'Maltese',
    story: 'Someone said his name 3 times',
  }
);

dogQueue.enqueue(
  {
    imageURL: 'http://i.dailymail.co.uk/i/pix/2011/09/22/article-2040461-0E08958300000578-449_306x423.jpg',
    imageDescription: 'A dog being much cooler than you.',
    name: 'Sk8rB0i',
    sex: 'Female',
    age: 420,
    breed: 'Cute',
    story: 'Significantly cooler than his owner. The split was amicable',
  }
);

dogQueue.enqueue(
  {
    imageURL: 'https://i.ytimg.com/vi/G5NAmj64VVs/maxresdefault.jpg',
    imageDescription: 'A dog about to bork',
    name: 'BORKBORKBORK',
    sex: 'Unknown',
    age: 'BORK',
    breed: 'BOOOOOOOOORK',
    story: 'Wouldn\'t stop borking',
  }
);

dogQueue.enqueue(
  {
    imageURL: 'http://i0.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
    imageDescription: 'Much doge.',
    name: 'Doge',
    sex: 'Male',
    age: 8,
    breed: 'Fluffy doge',
    story: 'Such adoption, very doge',
  }
);

module.exports = dogQueue;
