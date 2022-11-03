import { Http } from './http/http'
import { ExchangeRate } from './exchange-rate/exchange-rate'

const httpService = new Http()
const exchangeRateService = new ExchangeRate()

export { httpService, exchangeRateService }
