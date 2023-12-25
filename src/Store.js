import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {productFilterSlice} from './Components/ProductComponent/Slices/FilterSlice'
const rootReducer = combineReducers({
  productFilter: productFilterSlice.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
 
})

