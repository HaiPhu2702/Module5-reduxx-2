import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/card/productSlice';
import cardReducer from "../features/card/cardSlice";


export const store = configureStore({
  reducer: {
    productReducer,
    cardReducer
  },
});
