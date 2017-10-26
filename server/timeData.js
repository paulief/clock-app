const { TIME_UNITS } = require('../src/constants');

const TimeData = {
  offsets: {
    hourOffset: 0,
    minuteOffset: 0,
    secondOffset: 0,
  },
  getOffsets() {
    return this.offsets;
  },
  setOffset(newOffset) {
    this.offsets = Object.assign({}, this.offsets, newOffset);
  },
  updateOffset(unitType, change) {
    const { hourOffset, minuteOffset, secondOffset } = this.offsets;

    switch (unitType) {
      case TIME_UNITS.HOURS:
        this.setOffset({ hourOffset: hourOffset + change });
        break;
      case TIME_UNITS.MINUTES:
        this.setOffset({ minuteOffset: minuteOffset + change });
        break;
      case TIME_UNITS.SECONDS:
        this.setOffset({ secondOffset: secondOffset + change });
        break;
      default:
        break;
    }
    return this.offsets;
  },
};

module.exports = TimeData;
