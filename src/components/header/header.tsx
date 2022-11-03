import './styles.scss';
import {CurrencyRateSegment} from './components/components';
import {currencyHeaderItem, DataStatus} from '../../common/common';
import { useStore } from '../../hooks/use-store';

const Header = () => {
  const{currencyStore:{getRateToHrivna, dataStatus}}  = useStore()
  const isDataReady = dataStatus === DataStatus.FULFILLED

  return(
    <header className='header'>
      {isDataReady && currencyHeaderItem.map(({name, imgSrc}) => {
        const cuurencyInfo = getRateToHrivna(name)
        if(cuurencyInfo) {
          const data = {...cuurencyInfo, imgSrc}
          return <CurrencyRateSegment data={data} key={name}/>
        }
        return null
      })}
    </header>
  )
}

export {Header};
