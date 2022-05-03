const got = require('got');
const debug = require('debug')('hoplaa');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/foobar', (req, res) => {
  debug('Haluatko tarkentaa?');
  res.json({ message: 'eat shit' });
});

app.post('/eat-shit', (req, res) => {
  debug(req.body);
  res.status(204).end();
});

app.post('/square', (req, res) => {
  debug(req.body);
  const { luvut } = req.body;
  const tulokset = luvut.map((l) => l * l);
  res.json(tulokset);
});

app.post('/f2c', (req, res) => {
  const { aste } = req.body;
  res.json({ result: (aste - 32 ) * 5/9 })
});

app.get('/flipper', (req, res) => {
  const ruler = Math.floor(Math.random() * 10);
  if (ruler % 2 === 0) {
    res.send({ message: 'Heads wins the game' });
  } else {
    res.send({ message: 'Tails wins the game' });
  }
});

const port = +process.env.PORT || 9999;
const server = app.listen(port, () => {
  debug(`Listening to port ${port}`);
});
