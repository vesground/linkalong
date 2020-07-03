import API from 'service/api/httpClient.js';
import { APIObserver } from 'service/api/httpClient.js';

const request = function() {
  const observer = APIObserver();


}

export default {
  get: API.get('text/:id'),
  list: API.get('text'),
  create: API.post('text'),
  searh: API.remove('text/:textId/:sentenceId/similar')
};
