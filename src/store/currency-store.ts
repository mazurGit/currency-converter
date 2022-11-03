import { exchangeRateService } from '../services/services'
import {
  CurrencyDto,
  InputType,
  CurrencyName,
  DataStatus,
} from '../common/common'
import { makeAutoObservable } from 'mobx'

class CurrencyStore {
  dataStatus: DataStatus = DataStatus.IDLE

  currencies: CurrencyDto[] = [
    {
      cc: '',
      exchangedate: '',
      rate: 0,
      txt: '',
    },
  ]

  convertFrom = {
    value: '',
    name: CurrencyName.USD,
  }

  convertTo = {
    value: '',
    name: CurrencyName.UAH,
  }

  constructor() {
    this.getCurrenciesData = this.getCurrenciesData.bind(this)
    this.findCurrenciesData = this.findCurrenciesData.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.getRateToHryvnia = this.getRateToHryvnia.bind(this)
    this.updateInputData = this.updateInputData.bind(this)
    makeAutoObservable(this)
  }

  updateDataStatus = (dataStatus: DataStatus) => {
    this.dataStatus = dataStatus
  }

  getCurrenciesData = async () => {
    this.updateDataStatus(DataStatus.PENDING)
    try {
      let data = await exchangeRateService.getExchangeRate()
      data.push({
        cc: CurrencyName.UAH,
        exchangedate: Date(),
        rate: 1,
        txt: 'Українська гривня',
      })
      this.currencies = data
      this.updateDataStatus(DataStatus.FULFILLED)
    } catch {
      this.updateDataStatus(DataStatus.REJECTED)
    }
  }

  findCurrenciesData = () => {
    let convertFromData = this.currencies.find(
      (item) => item.cc === this.convertFrom.name
    )
    let convertToData = this.currencies.find(
      (item) => item.cc === this.convertTo.name
    )
    return { convertFromData, convertToData }
  }

  onValueChange = (inputType: InputType) => {
    const { convertFromData, convertToData } = this.findCurrenciesData()
    if (convertFromData && convertToData) {
      if (inputType === InputType.FROM) {
        this.convertTo.value = (
          (convertFromData.rate / convertToData.rate) *
          Number(this.convertFrom.value)
        ).toFixed(2)
      } else {
        this.convertFrom.value = (
          (convertToData.rate / convertFromData.rate) *
          Number(this.convertTo.value)
        ).toFixed(2)
      }
    }
  }

  updateInputData = (
    inputType: InputType,
    data: Partial<typeof this.convertFrom>
  ) => {
    if (inputType === InputType.FROM) {
      this.convertFrom = { ...this.convertFrom, ...data }
    } else {
      this.convertTo = { ...this.convertTo, ...data }
    }
  }

  getRateToHryvnia(currency: CurrencyName) {
    return this.currencies.find((item) => item.cc === currency)
  }
}

export { CurrencyStore }
