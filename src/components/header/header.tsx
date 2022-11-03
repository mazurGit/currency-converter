import './styles.scss'
import { CurrencyRateSegment } from './components/components'
import { currencyHeaderItem, DataStatus } from '../../common/common'
import { useStore } from '../../hooks/use-store'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
  const {
    currencyStore: { getRateToHryvnia, dataStatus },
  } = useStore()
  const isDataReady = dataStatus === DataStatus.FULFILLED

  return (
    <header className="header">
      {isDataReady &&
        currencyHeaderItem.map(({ name, imgSrc }) => {
          const currencyInfo = getRateToHryvnia(name)
          if (currencyInfo) {
            const data = { ...currencyInfo, imgSrc }
            return <CurrencyRateSegment data={data} key={name} />
          }
          return null
        })}
    </header>
  )
})

export { Header }
