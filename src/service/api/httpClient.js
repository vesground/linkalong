import axios from 'axios';
import cookieReader from 'js-cookie';

const API_URL = 'https://test-backend.sempi.tech/v1';
const AUTH_HEADER = 'Authorization';
const AUTH_COOKIE = 'access_token';

// delete axios.defaults.headers.common["Content-Type"]

export const APIObserver = function() {
  let subscribers = [];

  const subscribe = (fn) => {
    subscribers = [fn, ...subscribers];
  };
  const unsubscribe = (fn) => {
    subscribers = subscribers.filter((subscriber) => subscriber !== fn);
  };
  const notify = (data) => {
    subscribers.forEach((subscriber) => subscriber(data));
  };

  const request = () => {

  }

  return {
    subscribe,
    unsubscribe,
    notify
  }
}

const httpClient = (method = 'get') => (url = '') => async ({
  params = {},
  data = {},
  timeout = 1000,
  additionalHeaders = {},
} = {}) => {
  notify({ loading: true, error: undefined, data: undefined });

  const headers = {
    ...additionalHeaders
  };
  const token = cookieReader.get(AUTH_COOKIE);

  if (token) {
    headers[AUTH_HEADER] = `Bearer ${token}`;
  }

  const response = await axios({
    url: `${API_URL}/${url}/`,
    params,
    method,
    timeout,
    headers,
    data,
  });

  notify({ loading: false, data: response, error: response });
};

export default {
  get: httpClient(),
  post: httpClient('post'),
  put: httpClient('put'),
  remove: httpClient('delete'),
}
