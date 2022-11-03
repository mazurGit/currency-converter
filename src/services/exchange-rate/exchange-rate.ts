import { httpService } from '../services'
import { url } from '../../common/common'
import { CurrencyDto } from '../../common/common'

class ExchangeRate {
  private http: typeof httpService = httpService

  async getExchangeRate() {
    return httpService.load<CurrencyDto[]>(url)
  }
}

export { ExchangeRate }
