import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { productFilterService } from "../ProductService";

const initailState = {
  wishList: 0,
  
}

export const applyFilters = 
createAsyncThunk('url',
     async (filters={}) => {
       const response = await productFilterService(filters)
    
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
  reducers: {
    wishList: (state, action) => {

    }
  },
  extraReducers: (builder) => {
   
    builder.addCase(applyFilters.pending, (state, action) => {
      // state.getProductByFilters[action.meta.arg] = 'pending'
      state.getProductByFilters = 'pending'
    })
   
    builder.addCase(applyFilters.fulfilled, (state, action) => {

      // state.getProductByFilters[action.meta.arg] = action.payload
      state.getProductByFilters = action.payload
    })
  
    builder.addCase(applyFilters.rejected, (state, action) => {
      // state.getProductByFilters[ac//tion.meta.arg] = 'rejected'
      state.getProductByFilters = 'rejected'
    })
  },
})


export const selectProductsByFilter = (state ,filters) =>
  state.productFilter.getProductByFilters[filters]
