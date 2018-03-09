const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {PORT, CLIENT_ORIGIN} = require('./config');

const app = express();

const catQueue = require('./catQueue');
const dogQueue = require('./dogQueue');

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

const peek = queue => {
  if (queue.first === null) {
    return null;
  }
  console.log(queue.first.data);
  return queue.first.data;
};


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

app.get('/api/cat', (req, res) => 
  res.json(peek(catQueue))
);

app.delete('/api/cat', (req, res) => {
  catQueue.dequeue();
  return res.status(204).json({
    message: 'Adoption successful!',
  });
});

app.get('/api/dog', (req, res) => 
  res.json(peek(dogQueue))
);

app.delete('/api/dog', (req, res) => {
  dogQueue.dequeue();
  return res.status(204).json({
    message: 'Adoption successful!',
  });
});

if (require.main === module) {
  runServer();
}

module.exports = {app};
