import {FC} from 'react';
import './styles.scss';

type Props = {
  data: {
    imgSrc: string,
    name: string;
  }
}

const  CurrencyRateSegment:FC<Props> = ({data}) => {
  return (
    <div className='rate-segment'>
      <img src={data.imgSrc} alt='currency country flag' className='rate-segment__img'/>
      <div className='rate-segment__price'>
        <div>1 {data.name} / 40 UAH</div>
      </div>
    </div>

  )
}

export {CurrencyRateSegment};
