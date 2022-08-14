import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import getTodos from './schema/get_todos.json'


const axiosInstance = axios.create();


if (process.env.REACT_APP_USE_MOCK === 'true') {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet('/api/todos').reply(200, getTodos);
}

export default axiosInstance;
