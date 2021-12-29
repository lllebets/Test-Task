import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    value: {
      imageUrl: "",
      name: "",
      count: "",
      sizeWidth: "",
      sizeHeight: "",
      weight:"",
      comments:"",
    },
  },
  reducers: {
    change(state, action) {
        const productTemp = Object.assign({} , state.value)
        productTemp[action.payload[0]] = action.payload[1]
        state.value = productTemp;
    },
  },
});

export const { change } = productSlice.actions;
export default productSlice.reducer;