import { images } from '../../assets/images/images'
import { InputType } from '../../common/common'
import { CurrencyInput } from './components/components'
import './styles.scss'

const Converter = () => {
  return (
    <div className="converter">
      <div className="converter__header">
        <img src={images.converter} alt="currency exchange" />
        Converter
      </div>
      <div className="converter__content">
        <CurrencyInput type={InputType.FROM} />
        <CurrencyInput type={InputType.TO} />
      </div>
    </div>
  )
}

export { Converter }
