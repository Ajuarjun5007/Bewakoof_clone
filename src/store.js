// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import {productFilterSlice} from './Components/ProductComponent/Slices/FilterSlice'
// const rootReducer = combineReducers({
//   productFilter: productFilterSlice.reducer,
// })
// export const store = configureStore({
//   reducer: rootReducer,
 
// })


import { configureStore } from "@reduxjs/toolkit"
import productData from "./Components/ProductComponent/Slices/FilterSlice"

const store = configureStore({
    reducer: {
      productReducer: productData
    }
})

export default store;