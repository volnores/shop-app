import { configureStore } from "@reduxjs/toolkit";
import getItemsApiSlice from "./Slices/GetApiSlice/GetApiSlice";

export const store = configureStore({
  reducer: {
    items: getItemsApiSlice,
  },
});
