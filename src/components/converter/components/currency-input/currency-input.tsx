import { FC, ChangeEvent } from 'react'
import { observer } from 'mobx-react-lite'
import './styles.scss'
import { CurrencyName, InputType } from '../../../../common/common'
import { currencyName } from '../../../../common/common'
import { useStore } from '../../../../hooks/hooks'

type Props = {
  type: InputType
}

const CurrencyInput: FC<Props> = observer(({ type }) => {
  const {
    currencyStore: { convertFrom, convertTo, updateInputData, onValueChange },
  } = useStore()

  const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const target = e.target
    if (target.nodeName === 'INPUT') {
      const value = target.value.replace(/\D/gi, '')
      updateInputData(type, { value })
    } else {
      updateInputData(type, { name: target.value as CurrencyName })
    }
    onValueChange(type)
  }

  return (
    <div className="currency-input">
      <label htmlFor={type}>{type}</label>
      <input
        id={`${type}-value`}
        name={type}
        value={type === InputType.FROM ? convertFrom.value : convertTo.value}
        onChange={onChange}
      />
      <div className="currency-input__divider" />
      <select
        id={`${type}-currency`}
        className="currency-input__selector"
        onChange={onChange}
        value={type === InputType.FROM ? convertFrom.name : convertTo.name}
      >
        {currencyName.map(({ name, value }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
})

export { CurrencyInput }
