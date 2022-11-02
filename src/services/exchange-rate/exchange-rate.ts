import {httpService} from '../services';
import {url} from '../../common/common';

class ExchangeRate {
  private http:typeof httpService = httpService;

  async getExchangeRate () {
    return await httpService.load(url)
  }
}

export {ExchangeRate};
