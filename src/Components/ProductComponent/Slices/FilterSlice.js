import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productFilterService } from "../ProductService";
import { json } from "react-router-dom";

const initialState = {
  wishList:[],
  isLoading: true,
  error:"",
  dressList:[],
  cartList: [],
  updateMeInfo:[],
  searchValueList:[],
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
const ContentType = "application/json";

export const getWishListOperations = createAsyncThunk(
  "produtList/getWishListOperations",
  async ({ id, type, tokenValue, suffix }, { rejectWithValue }) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");

    let requestOptions;
    if (type === "PATCH" || type === "DELETE") {
      let raw = JSON.stringify({
        productId: id,
      });
      requestOptions = {
        method: type,
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
    } else if (type === "GET") {
      requestOptions = {
        method: type,
        headers: myHeaders,
        redirect: "follow",
      };
    }
    let url = BASE_URL + "wishlist/" + suffix;
    try {
      const response = await fetch(url, requestOptions);
      // console.log("slice",response);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        return rejectWithValue({ error: "fetching failed" });
      }
    } catch (error) {
      return rejectWithValue({ error: "An error occurred during the fetch" });
    }
  }
);
export const getCartOperations = createAsyncThunk(
  "produtList/getCartOperations",
  async ({ id, size, qty, type, tokenValue, suffix }, { rejectWithValue }) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");

    let requestOptions;
    if (type === "PATCH" || type === "DELETE") {
      let raw = JSON.stringify({
        productId: id,
        size: size,
        quantity: Number(qty),
      });
      requestOptions = {
        method: type,
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
    } else if (type === "GET") {
      requestOptions = {
        method: type,
        headers: myHeaders,
        redirect: "follow",
      };
    }
    let url = BASE_URL + "cart/" + suffix;
    // console.log("fetch call", url, requestOptions, suffix);
    try {
      const response = await fetch(url, requestOptions);
      // console.log("slice", response);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        return rejectWithValue({ error: "fetching failed" });
      }
    } catch (error) {
      return rejectWithValue({ error: "An error occurred during the fetch" });
    }
  }
);
export const getProductList = createAsyncThunk(
  "movieList/getProductList",
  async (
    {
      id,
      type,
      // tokenValue,
      suffix,
    },
    { rejectWithValue }
  ) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    // myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");

    let requestOptions = {
      method: type,
      headers: myHeaders,
      redirect: "follow",
    };
    let url = BASE_URL + "clothes/products" + suffix;
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        return rejectWithValue({ error: "fetching failed" });
      }
    } catch (error) {
      return rejectWithValue({ error: "An error occurred during the fetch" });
    }
  }
);
export const setSearchValue = createAsyncThunk(
  "movieList/setSearchValue",
  async (
    {
      id,
      type,
      // tokenValue,
      suffix,
      searchQuery,
    },
    { rejectWithValue }
  ) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    // myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");

    let requestOptions = {
      method: type,
      headers: myHeaders,
      redirect: "follow",
    };
    let url = BASE_URL + `clothes/products?search={"name":"${searchQuery}"}` + suffix;
    // console.log(id,type,url)
    try {
      const response = await fetch(url, requestOptions);
      // console.log("product",response);
      if (response.ok) {
        const result = await response.json();
        // console.log("productResult",result.data);
        return result;
      } else {
        return rejectWithValue({ error: "fetching failed" });
      }
    } catch (error) {
      return rejectWithValue({ error: "An error occurred during the fetch" });
    }
  }
);
export const getUpdateMe = createAsyncThunk(
  "productList/getUpdateMe",
  async ({type,
    userName,
    streetName,
    cityName,
    stateName,
    countryName,
    zipcodeName,
    tokenValue,
    phoneNumber,
    }, { rejectWithValue }) => {
    let myHeaders = new Headers();
    myHeaders.append("projectID", "gams07bkd3di");
    myHeaders.append("Authorization", `Bearer ${tokenValue}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("accept", "application/json");

    let requestOptions;
      
      let raw = JSON.stringify({
        name:userName,
        address:{
          street:streetName,
          city:cityName,
          state:stateName,
          country:countryName,
          zipcode:zipcodeName,
        },
        phone:phoneNumber,
      });
      
      requestOptions = {
        method:"PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      console.log("raw",requestOptions);
      
    // let url = BASE_URL + "user/updateme";
    let url = "https://academics.newtonschool.co/api/v1/user/updateme";
    // console.log("fetch call", url, requestOptions);
    try {
      const response = await fetch(url, requestOptions);
      // console.log("slice", response);
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        return rejectWithValue({ error: "fetching failed" });
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
        state.getProductByFilters = "pending";
      })

      .addCase(applyFilters.fulfilled, (state, action) => {
        state.getProductByFilters = action.payload;
      })

      .addCase(applyFilters.rejected, (state, action) => {
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

      .addCase(getCartOperations.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getCartOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartList = action.payload;
        state.error = "";
      })

      .addCase(getCartOperations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.payload?.error;
      })
      .addCase(getUpdateMe.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getUpdateMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateMeInfo= action.payload;
        state.error = "";
      })

      .addCase(getUpdateMe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.payload?.error;
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
      })
       .addCase(setSearchValue.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(setSearchValue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchValueList = action.payload;
        state.error = "";
      })
      .addCase(setSearchValue.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
