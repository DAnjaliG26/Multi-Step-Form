import { WebApi } from './WebApi';
import { API_URL_PREFIX } from '../constants';

export class SupplierApi {
 
  async Savefiles(attachments) {
    return this.WebApi.post("supplierRequest/Savefiles", attachments);
  }

  async save(supplierRequest) {
    return this.WebApi.post("supplierRequest/save", supplierRequest);
  }
  
  async Delete(file) {
    const json = await this.get(`${API_URL_PREFIX}/api/SupplierRequest/DeleteAttachment?attachment=${file}`);
    return json;
  }

  get = async (URL) => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      mode: 'cors',
    });
    const json = await response.json();
    return json;
  }
  constructor() {
    this.WebApi = new WebApi();
  }
}

export default SupplierApi;
