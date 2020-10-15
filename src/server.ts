import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Test');
  return res.send('Hello World')
});

app.listen(3333);
