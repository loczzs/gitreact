import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
import axios from "axios";
// const dispatch = useDispatch
const initialState = {
  todos: [],
  filter: "all",
  search: "",
  // state dùng để quản lý khi dữ liệu đang được tải sẽ hiển thị loading ra cho user thấy
  isLoading: false,
  // state dùng để hiển thị lỗi nếu call API thất bại
  error: null,
};
const FIlTER_MAPPING = {
  active: false,
  done: true,
  all: undefined,
};
// thunk action
export const gettodos = createAsyncThunk(
  "todo/gettodos", //action type

  // hàm nhận vào 2 tham số, tham số thứ 1 params của hàm,
  // tham số thứ 2 là một object thunk API chứ các hàm như dispatch, getState,...
  async (_, { getState, rejectWithValue }) => {
    // khi ko dùng tham số 1 thì _
    try {
      const { filter, search } = getState().todo;
      const { data } = await axios.get(
        "https://62f8549b3eab3503d1d55ce4.mockapi.io/todo",
        {
          params: {
            isDone: FIlTER_MAPPING[filter],
            tittle: search,
          },
        }
      );
      return data;
    } catch (error) {
      //c1 throw error.response.data
      throw rejectWithValue(error.response.data); // c2
    }
  }
);
export const addTodo = createAsyncThunk("todo/addTodo", async (tittle,{dispatch,rejectWithValue}) => {
  try {
    const { data } = await axios.post(
      `https://62f8549b3eab3503d1d55ce4.mockapi.io/todo`,
      { tittle: tittle, isDone: false } // có  thể viết rút gọn  { tittle, isDone: false }  vì key và biến cùng tên
    );
    dispatch(gettodos());
    // dispatch action getTodos để call API lấy danh sách todos sau khi thêm thành công và set lại state todos trong store

    
  } catch (error) {
      return rejectWithValue(error.response.data);
  }
});
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async(tittle,{dispatch,rejectWithValue})=>{
  try {
    const { data } = await axios.delete(
      `https://62f8549b3eab3503d1d55ce4.mockapi.io/todo/${tittle}`
      // có  thể viết rút gọn  { tittle, isDone: false }  vì key và biến cùng tên
    );
    // dispatch action getTodos để call API lấy danh sách todos sau khi thêm thành công và set lại state todos trong store
    dispatch(gettodos());
    // gọi hàm call back sau khi thêm thành công
  } catch {}
})
const todoSlice = createSlice({
  name: "todo",
  initialState,
  // chỉ dùng để xử lý các action đồng bộ
  reducers: {
    changeFilter: (state, { payload }) => {
      // redux toolkit hỗ trợ mutate (thay đổi) state trực tiếp mà không cần phải return về 1 state mới, bằng thư viện immer
      state.filter = payload; // action.payload
    },
    changeSearch: (state, { payload }) => {
      state.search = payload;
    },
  },
  // dùng để xử lý các actions của createAsyncThunk
  // Mặc định hàm createAsyncThunk sẽ tạo ra 3 actions pending/fulfiled/rejected và ta sẽ dùng extraReducers để bắt và xử lý các actions đó
  extraReducers: (builder) => {
    // action "todo/getTodos/pending"
    builder.addCase(gettodos.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(gettodos.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    });
    builder.addCase(gettodos.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    });
  },
});
export const { changeFilter, changeSearch} = todoSlice.actions;

export default todoSlice.reducer;
