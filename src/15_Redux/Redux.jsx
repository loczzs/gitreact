import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increase , increaseByAmount} from "../slices/countSlice"
const Redux = () => {
  //để truy cập vào giá trị state của redux store ta dùng hook useSelector
  // Để truy cập vào giá trị state của redux store ta dùng hook useSelector
  // useSelector nhận vào 1 callback có tham số state là giá trị hiện tại của store, giá trị mà ta return bên trong callback chính là giá trị trả về của hook useSelector
  // useSelector sẽ theo dõi và tự động gọi lại callback nếu giá trị state của store thay đổi
  const { count, colors } = useSelector((state) => {
    return { count: state.count, colors: state.colors };
  });
  // useDispatch trả về dispatch function của redux store.
  // dispatch function dùng để gửi các action lên store để cập nhật state
  const dispatch = useDispatch();
  const handleIncrease = () => {
    //làm sao để tăng state lên +1
    // dispatch slice action
    dispatch( increase());
  };
  const handleIncreaseByAmount = () => {
    const value = +prompt("Input amount"); // nếu dùng value thì bên store sửa lại action.value
    dispatch(increaseByAmount(value)); 
    // nếu muốn truyền nhiều tham số hơn thì truyền vào
    // 1 object vd increaseByAmount({count:value,c:d}) cách lấy vd action.payload.count
  };
  const handleAddcolor = () => {
    const color = prompt("input your color:");
    dispatch({ type: "add", color });
  };
  const handleRemovecolor =()=>{
    const color = prompt("input your color:");
    dispatch({ type: "remove", color })
  }
  return (
    <div>
      <h1>redux</h1>
      <p>Count:{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncreaseByAmount}>handleIncreaseByAmount</button>
      <br />
      <br />
      <p>Colors: {colors.join()}</p>
      <button onClick={handleAddcolor}>add color</button>
      
      <button onClick={handleRemovecolor}>remove color</button>
    </div>
  );
};

export default Redux;
