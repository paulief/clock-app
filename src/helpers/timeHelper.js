import moment from 'moment';

export const getTimeValues = () => {
  const now = moment();
  return {
    hours: now.hours(),
    minutes: now.minutes(),
    seconds: now.seconds(),
  };
};

export default getTimeValues;
