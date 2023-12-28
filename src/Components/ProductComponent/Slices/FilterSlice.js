import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { productFilterService } from "../../ApiFetch";

const initailState = {
  wishList: 0,
  
}

export const applyFilters = 
createAsyncThunk('url',
     async (filters={}) => {
       const response = await productFilterService(filters)
       const data = await response.data
       if (response.status < 200 || response.status >= 300) {
          console.log("fetchfilter",data, filters);
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
  reducers: {
    wishList: (state, action) => {

    }
  },
  extraReducers: (builder) => {
   
    builder.addCase(applyFilters.pending, (state, action) => {
      state.getProductByFilters[action.meta.arg] = 'pending'
    })
   
    builder.addCase(applyFilters.fulfilled, (state, action) => {

      state.getProductByFilters[action.meta.arg] = action.payload
    })
  
    builder.addCase(applyFilters.rejected, (state, action) => {
      state.getProductByFilters[action.meta.arg] = 'rejected'
    })
  },
})



export const selectProductsByFilter = (state ,filters) =>
  state.productFilter.getProductByFilters[filters]
