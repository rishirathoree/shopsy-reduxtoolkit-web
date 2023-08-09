import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api_link = 'https://fakestoreapi.com/products';

// Create an asynchronous thunk for fetching products
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await axios.get(api_link);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

const initialState = {
  data: [],
  filterProductBySearch: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // You can add additional reducer actions here if needed
    filterSearchInput: (state, action) => {
      const textInput = action.payload;
      const filterProductBasedOnInputValue = state.data.filter(item =>
        item.title.toLowerCase().includes(textInput.toLowerCase())
      );
      if(textInput.length > 0){

        state.filterProductBySearch = filterProductBasedOnInputValue
      }
      else{
        state.filterProductBySearch = []
      }
    }
  },
  extraReducers: builder => {
    // Handle the fetchProducts action lifecycle
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});
export const {filterSearchInput} = productSlice.actions;
export default productSlice.reducer;
