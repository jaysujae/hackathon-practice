import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosInstance = axios.create();

if (process.env.REACT_APP_USE_MOCK === 'true') {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet("/api/test").reply(200, {
    test: true
  });
}

export default axiosInstance;
