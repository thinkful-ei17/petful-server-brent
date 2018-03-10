const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const Queue = require('./Queue');

const {PORT, CLIENT_ORIGIN} = require('./config');

const app = express();


// ---------------------------ADD DOGS TO QUEUE--------------------------------------
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
// -----------------------------------ADD CATS TO QUEUE-------------------------------------
const catQueue = new Queue();
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

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

function peek(queue) {
  if (queue.first === null) {
    return{ name: 'Fresh outta stock, check back later!'};
  }
  return queue.first.value;
}


function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

app.get('/api/cat', (req, res) => {
  res.json(peek(catQueue));
});

app.delete('/api/cat', (req, res) => {
  catQueue.dequeue();
  res.status(204).json({
    message: 'Adoption successful!',
  });
});

app.get('/api/dog', (req, res) => {
  console.log('dogqueue',dogQueue);
  res.json(peek(dogQueue));
});

app.delete('/api/dog', (req, res) => {
  dogQueue.dequeue();
  res.status(204).json({
    message: 'Adoption successful!',
  });
});

if (require.main === module) {
  runServer();
}

module.exports = {app};
