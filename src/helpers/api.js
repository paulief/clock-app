import { API_BASE_PATH, API_PATHS } from '../constants';

const Http = {
  get(path) {
    const options = {
      method: 'GET',
    };
    return this.request(path, options);
  },
  put(path, body) {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    return this.request(path, options);
  },
  request(path, options) {
    return fetch(`${API_BASE_PATH}${path}`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('API Error');
      });
  },
};

const Api = {
  getOffsets: () => Http.get(API_PATHS.GET_OFFSETS),
  updateOffset: (unitType, change) => Http.put(API_PATHS.UPDATE_OFFSET, { unitType, change }),
};

export default Api;
