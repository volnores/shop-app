import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("cart/fetchApiItems", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  items: [],
};

export const getItemsApiSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default getItemsApiSlice.reducer;
