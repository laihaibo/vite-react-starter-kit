import { useContext, createContext } from "react";

import dataStore from "./dataStore";
import uiStore from "./uiStore";

const stores = createContext({ dataStore, uiStore });
const useStores = () => useContext(stores);

export { stores, useStores };
