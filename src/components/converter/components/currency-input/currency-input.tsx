import {FC} from 'react'
import './styles.scss';
import {InputType} from '../../../../common/common'
import {currencyName} from '../../../../common/common';

type Props = {
  type: InputType;
}

const CurrencyInput:FC<Props> = ({type}) => {
  return (
    <div className="currency-input">
      <label htmlFor={type}>{type}</label>
      <input id={`${type}-value`} name={type} type='number'/>
      <div className="currency-input__divider"/>
      <select id={`${type}-currency`} className="currency-input__selector">
        {currencyName.map(({name, value}) => <option value={value} key={value}>{name}</option>)}
      </select>
    </div>
  )
}

export {CurrencyInput};
