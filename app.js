const express = require('express');
const path = require('path');
const app = express();
const csvtojson = require('csvtojson');
const cors = require('cors');

app.use(cors());
app.use('/api', (req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'http://localhost:4200'];
  const origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use('/api', (req, res) => {
  csvtojson().fromFile('./heatmap_data_not_sorted.csv').then(data => {
    res.send(data);
  });
});
app.use('*', (req, res) => res.sendFile(path.resolve(path.join(__dirname, 'dist/glint-ui-test/index.html'))));

app.listen(3000, () => {
  console.log('Server Started on port 3000');
});