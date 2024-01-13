import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productFilterService } from "../ProductService";
import { json } from "react-router-dom";

const initialState = {
  wishList: [],
  isLoading: false,
  error: "",
  dressList:[],
};

export const applyFilters = createAsyncThunk("url", async (filters = {}) => {
  const response = await productFilterService(filters);
  const data = await response.data;
  if (response.status < 200 || response.status >= 300) {
    return data;
  }
  return data;
});


const BASE_URL = "https://academics.newtonschool.co/api/v1/ecommerce/";
const projectID = "gams07bkd3di";
const ContentType = 'application/json';

export const getWishListOperations = createAsyncThunk(
  "movieList/getWishListOperations",
  async ({id,type,tokenValue,suffix}, {rejectWithValue }) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('accept', 'application/json');

    let requestOptions;
    if (type === "PATCH" || type === "DELETE") {
        let raw = JSON.stringify({
            productId: id,
          })
          requestOptions = {
              method: type,
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
        } else if (type === "GET") {
        requestOptions = {
            method: type,
            headers: myHeaders,
            redirect: 'follow'
        };
    }
    let url = BASE_URL +"wishlist/"+ suffix
    try {
      const response = await fetch(url,requestOptions);
      // console.log("slice",response);
      if(response.ok){
        const result = await response.json();
        return result;
      }else{
        return rejectWithValue({error:"fetching failed"})
      }
    } catch (error) {
      return rejectWithValue({ error: "An error occurred during the fetch" });
    }
  }
);

export const getProductList = createAsyncThunk(
  "movieList/getProductList",
  async ({id,type,tokenValue,suffix},{rejectWithValue }) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append('Content-Type', "application/json");
    myHeaders.append('accept', "application/json");

     let  requestOptions = {
            method: type,
            headers: myHeaders,
            redirect: 'follow'
        };
    let url = BASE_URL +"clothes/products"+suffix
    // console.log(id,type,url)
    try {
      const response = await fetch(url,requestOptions);
      // console.log("product",response);
      if(response.ok){
        const result = await response.json();
        // console.log("productResult",result.data);
        return result;
      }else{
        return rejectWithValue({error:"fetching failed"})
      }
    } catch (error) {
      return rejectWithValue({ error: "An error occurred during the fetch" });
    }
  }
);



export const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(applyFilters.pending, (state, action) => {
        // state.getProductByFilters[action.meta.arg] = 'pending'
        state.getProductByFilters = "pending";
      })

      .addCase(applyFilters.fulfilled, (state, action) => {
        // state.getProductByFilters[action.meta.arg] = action.payload
        state.getProductByFilters = action.payload;
      })

      .addCase(applyFilters.rejected, (state, action) => {
        // state.getProductByFilters[ac//tion.meta.arg] = 'rejected'
        state.getProductByFilters = "rejected";
      })

      .addCase(getWishListOperations.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getWishListOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.wishList = action.payload;
        state.error = "";
      })

      .addCase(getWishListOperations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(getProductList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dressList = action.payload;
        state.error = "";
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
