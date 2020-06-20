import axios from 'axios';
const url = 'https://test-backend.sempi.tech/v1';

export async function listTexts() {
  const response = await axios.get(`${url}/text/`);

  return response;
}

export async function createText(text) {
  const response = await axios.post(`${url}/text/`, { text });

  return response;
}

export async function getText(textId) {
  const response = await axios.get(`${url}/text/${textId}`);

  return response;
}
