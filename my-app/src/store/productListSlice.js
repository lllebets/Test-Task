import { createSlice } from "@reduxjs/toolkit";


export const productListSlice = createSlice({
  name: "productListSlice",
  initialState: {
    value: [],
  },
  reducers: {
    setList(state, action) {
        state.value = action.payload
    },
  },
});

export const {setList} = productListSlice.actions;
export default productListSlice.reducer;