import { createSlice } from "@reduxjs/toolkit";


export const linkIdSlice = createSlice({
  name: "linkIdSlice",
  initialState: {
    value: "",
  },
  reducers: {
    setLink(state, action) {
        state.value = action.payload
    },
  },
});

export const {setLink} = linkIdSlice.actions;
export default linkIdSlice.reducer;