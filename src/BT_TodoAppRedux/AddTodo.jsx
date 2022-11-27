import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const handleKeyDown = async (evt) => {
    //**
    if (evt.key !== "Enter") return;
    const { value } = evt.target;
    // dispatch action thunk addTodo(value)
    // dispatch(addTodo(value,()=>{
    //   evt.target.value = ""
    // làm như vậy nếu có rơi vào trường hợp ko thành công thì sẽ ko bị xóa
    // })) dùng cho action chỗ ** ko có async
    // Khi dispatch 1 action được tạo bởi hàm createAsyncThunk nó sẽ trả về một promise => ta có thể dùng then/catch hoặc try/catch để chờ action đó xử lý xong và làm một việc gì đó bên trong component
    try {
      await dispatch(addTodo(value)).unwrap(); // dùng để bắt giá trị trả ra từ hàm nếu có
      evt.target.value = "";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <input
      type="text"
      className="form-control"
      placeholder="Add your todo"
      onKeyDown={handleKeyDown}
    />
  );
};

export default AddTodo;
