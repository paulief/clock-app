/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const TimeData = require('./timeData');

const app = express();
app.use(bodyParser.json());

app.get('/timeOffsets', (req, res) => {
  res.json(TimeData.getOffsets());
});

app.put('/offset', (req, res) => {
  const { unitType, change } = req.body;
  const offsets = TimeData.updateOffset(unitType, change);
  res.json(offsets);
});

app.listen(8000, () => {
  console.log('Listening on port 8000...');
});

/* eslint-enable no-console */
