import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { productFilterService } from "../../ApiFetch";

export const applyFilters = 
createAsyncThunk('url',
     async (filters={}) => {
       const response = await productFilterService(filters)
       console.log("response",response)
       const data = await response.data
       if (response.status < 200 || response.status >= 300) {
         return data
       }
       return data
     }
   )



export const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState: {
    getProductByFilters: {} 
  },
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(applyFilters.pending, (state, action) => {
      state.getProductByFilters[action.meta.arg] = 'pending'
    })
   
    builder.addCase(applyFilters.fulfilled, (state, action) => {
        console.log("action",action, state)

      state.getProductByFilters[action.meta.arg] = action.payload
    })
  
    builder.addCase(applyFilters.rejected, (state, action) => {
      state.getProductByFilters[action.meta.arg] = 'rejected'
    })
  },
})



export const selectProductsByFilter = (state ,filters) =>
  state.productFilter.getProductByFilters[filters]
