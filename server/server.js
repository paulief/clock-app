/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const TimeData = require('./timeData');
const { API_PATHS } = require('../src/constants');

const app = express();
app.use(bodyParser.json());
app.use(config);

app.get(API_PATHS.GET_OFFSETS, (req, res) => {
  res.json(TimeData.getOffsets());
});

app.put(API_PATHS.UPDATE_OFFSET, (req, res) => {
  const { unitType, change } = req.body;
  const offsets = TimeData.updateOffset(unitType, change);
  console.log(offsets);
  res.json(offsets);
});

app.listen(8000, () => {
  console.log('Listening on port 8000...');
});

/* eslint-enable no-console */
