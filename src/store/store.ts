import {CurrencyStore} from './currency-store';
import { createContext } from "react";

const store = {
  currencyStore: new CurrencyStore(),
}

const StoreContext = createContext(store);

export {StoreContext, store};
