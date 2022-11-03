import {exchangeRateService} from '../services/services';
import {CurrencyDto, InputType, CurrencyName, DataStatus} from '../common/common';
import { makeAutoObservable } from "mobx";

class CurrencyStore {
  dataStatus: DataStatus = DataStatus.IDLE;
  currencies: CurrencyDto[] = [{
    cc: '',
    exchangedate: '',
    r030: 0,
    rate: 0,
    txt: '',
  }];
  convertFrom = {
    value: 0,
    name: ''
  }
  convertTo = {
    value: 0,
    name: ''
  }
  constructor () {
    this.getCurrenciesData = this.getCurrenciesData.bind(this)
    this.findCurrenciesData = this.findCurrenciesData.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
    this.getRateToHrivna = this.getRateToHrivna.bind(this)
    makeAutoObservable(this)
  }

  getCurrenciesData = async() => {
    this.dataStatus = DataStatus.PENDING
    try {
      this.currencies = await exchangeRateService.getExchangeRate()
      this.dataStatus = DataStatus.FULFILLED
    } catch {
      this.dataStatus = DataStatus.REJECTED
    }
  }

  findCurrenciesData = () => {
    let convertFromData = this.currencies.find(item => item.txt === this.convertFrom.name)
    let convertToData = this.currencies.find(item => item.txt === this.convertTo.name)
    return {convertFromData, convertToData}
  }

  onValueChange =(inputType:InputType) => {
    const {convertFromData, convertToData} = this.findCurrenciesData()
    if(convertFromData && convertToData){
      if(inputType === InputType.FROM){
        this.convertTo.value = convertFromData.rate / convertToData.rate
      } else{
        this.convertTo.value = convertToData.rate / convertFromData.rate
      }
    }
  }

  getRateToHrivna (currency: CurrencyName) {
    return this.currencies.find(item => item.cc === currency)
  }
}

export {CurrencyStore}
