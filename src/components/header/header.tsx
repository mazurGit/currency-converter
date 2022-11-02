import './styles.scss';
import {CurrencyRateSegment} from './components/components';
import {currencyHeaderItem} from '../../common/common';

const Header = () => {
  return(
    <header className='header'>
      {currencyHeaderItem.map(item => <CurrencyRateSegment data={item} key={item.name}/>)}
    </header>
  )
}

export {Header};
