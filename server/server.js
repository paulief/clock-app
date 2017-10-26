/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const TimeData = require('./timeData');
const { API_PATHS } = require('../src/constants');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get(API_PATHS.GET_OFFSETS, (req, res) => {
  res.json(TimeData.getOffsets());
});

app.put(API_PATHS.UPDATE_OFFSET, (req, res) => {
  const { unitType, change } = req.body;
  const offsets = TimeData.updateOffset(unitType, change);
  res.json(offsets);
});

app.listen(8000, () => {
  console.log('Listening on port 8000...');
});

/* eslint-enable no-console */
