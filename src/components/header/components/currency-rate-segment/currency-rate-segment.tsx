import {FC} from 'react';
import './styles.scss';
import {CurrencyDto} from '../../../../common/common'

type Props = {
  data: {
    imgSrc: string,
    cc: CurrencyDto['cc'];
    rate: CurrencyDto['rate'];
  }
}

const  CurrencyRateSegment:FC<Props> = ({data}) => {
  return (
    <div className='rate-segment'>
      <img src={data.imgSrc} alt='currency country flag' className='rate-segment__img'/>
      <div className='rate-segment__price'>
        <div>1 {data.cc} / {data.rate.toFixed(2)} UAH</div>
      </div>
    </div>

  )
}

export {CurrencyRateSegment};
