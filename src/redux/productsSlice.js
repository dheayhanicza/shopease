import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/productsData';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: productsData,
  },
  reducers: {
    // keep for future use
  },
});

export default productsSlice.reducer;
