import { API_URL_PREFIX } from '../constants';

export class WebApi {

  async get(url) {
    const response = await fetch(`${API_URL_PREFIX}/api/${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Pragma: 'no-cache',
      },
      credentials: 'include',
      mode: 'cors',
    });

    const json = await response.json();
    return json;
  }

  async post(url, body) {
    const response = await fetch(`${API_URL_PREFIX}/api/${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Pragma: 'no-cache',
      },
      body: JSON.stringify(body),
      credentials: 'include',
      mode: 'cors',
    });

    return response.ok;
  }
}

export default WebApi;
