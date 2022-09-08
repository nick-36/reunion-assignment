import { createSlice } from "@reduxjs/toolkit";
const propertySlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    isEmpty: false,
  },
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload;
    },

    setIsEmpty: (state, action) => {
      state.isEmpty = action.payload;
    },
  },
});

const { reducer, actions } = propertySlice;
export const { setProperties, setIsEmpty } = actions;
export default reducer;
