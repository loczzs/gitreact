import axios from "axios";
import * as actionTypes from "../constants/todoConstant"

// mặc định redux chỉ cho phép action, là một plain object
// dispatch({
//   type: "DO_SOMETHING",
// });
// const doSomething = () => {
//   return {
//     type: "DO_SOMETHING",
//   };
// };
// dispatch(doSomething());
// Tuy nhiên khi sử dụng một thư viện middleware của redux là
// redux-thunk thì nó cho phép ta viết các action là một function
const FIlTER_MAPPING = {
  active: false,
  done: true,
  all: undefined,
};
export const gettodos = () => {
  // thunk action nhận vào 2 tham số là dispatch và getState
  return async (dispatch, getState) => {
    try {
      const { filter, search } = getState().todo;
      // dispatch action pending
      dispatch({ type: actionTypes.GET_TODOS_PENDING });
      const { data } = await axios.get(
        "https://62f8549b3eab3503d1d55ce4.mockapi.io/todo",
        {
          params: {
            isDone: FIlTER_MAPPING[filter],
            tittle: search,
          },
        }
      );
      // dispatch action getTodos để call API lấy danh sách todos sau khi thêm thành công và set lại state todos trong store
      dispatch({ type: actionTypes.GET_TODOS_FULFILLED, data });
    } catch (error) {
      // Thất bại/ API bị lỗi
      // error.response.data là format của axios
      dispatch({
        type: actionTypes.GET_TODOS_REJECTED,
        error: error.response.data,
      });
    }
  };
};
// cách sử dụng: dispatch(getTodos())
export const addTodo = (tittle, callback) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "https://62f8549b3eab3503d1d55ce4.mockapi.io/todo",
        { tittle: tittle, isDone: false } // có  thể viết rút gọn  { tittle, isDone: false }  vì key và biến cùng tên
      );
      // dispatch action getTodos để call API lấy danh sách todos sau khi thêm thành công và set lại state todos trong store
      dispatch(gettodos());
      // gọi hàm call back sau khi thêm thành công
      callback();
    } catch {}
  };
};
export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `https://62f8549b3eab3503d1d55ce4.mockapi.io/todo/${todoId}`
        // có  thể viết rút gọn  { tittle, isDone: false }  vì key và biến cùng tên
      );
      // dispatch action getTodos để call API lấy danh sách todos sau khi thêm thành công và set lại state todos trong store
      dispatch(gettodos());
      // gọi hàm call back sau khi thêm thành công
    } catch {}
  };
};
export const toggleTodo = (todo) => {
  return async (dispatch) => {
    try {
      const { id, ...payload } = todo;
      await axios.put(
        `https://62f8549b3eab3503d1d55ce4.mockapi.io/todo/${id}`,
        { ...payload, isDone: !payload.isDone }
      );
      // dispatch action getTodos để call API lấy danh sách todos sau khi thêm thành công và set lại state todos trong store
      dispatch(gettodos());
      // gọi hàm call back sau khi thêm thành công
    } catch {}
  };
};
export const changeFilter = (filter) => {
  console.log(filter);
  return {
    type: actionTypes.CHANGE_FILTER,
    filter: filter,
  };
};
export const searchTodo = (search) => {
  console.log(search);
  return {
    type: actionTypes.CHANGE_SEARCH,
    search: search,
  };
};
