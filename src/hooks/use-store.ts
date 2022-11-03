import { useContext } from 'react'
import { StoreContext } from '../store/store'
import { Store } from '../common/common'

const useStore = () => useContext<Store>(StoreContext)

export { useStore }
