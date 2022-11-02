import './styles.scss';
import {CurrencyRateSegment} from './components/components';
import {currency} from '../../constants/currency';

const Header = () => {
  return(
    <header className='header'>
      {currency.map(item => <CurrencyRateSegment data={item} key={item.name}/>)}

    </header>
  )
}

export {Header};
