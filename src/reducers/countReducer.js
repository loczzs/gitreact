// Khai báo state là một reducer, là một function nhận vào 2 tham số và return về một giá trị state mới
// Tham số thứ 1: giá trị hiện tại của state
// Tham số thứ 2: action, ta sẽ dùng action.type để kiểm tra và thay đổi state
const countReducer = (state = 0, action) => {
    switch (action.type) {
      case "increase":
        return state + 1;
      case "increaseByAmount":
        return state + action.amount;
      default:
        return state;
    }
  };
  
  export default countReducer;