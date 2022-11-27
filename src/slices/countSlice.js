import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count", // namespace dùng để định danh cho slice
  initialState: 0, // giá trị khởi tạo của state
  // Kết hợp actions + reducer
  reducers: {
    increase: (state, action) => {
      return state + 1;
    },
    increaseByAmount: (state, action) => {
      return state + action.payload;
    },
  },
});
export const {increase , increaseByAmount} = countSlice.actions

export default countSlice.reducer