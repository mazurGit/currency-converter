import React from 'react'
import { Header, Converter } from './components'
import { useStore, useEffect } from '../hooks/hooks'

const App = () => {
  const {
    currencyStore: { getCurrenciesData },
  } = useStore()
  useEffect(() => {
    getCurrenciesData()
  }, [])

  return (
    <div className="container">
      <Header />
      <Converter />
    </div>
  )
}

export default App
