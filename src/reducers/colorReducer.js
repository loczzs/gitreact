
const initialState = ["red", "green", "blue"];


const colorReducer = (state = initialState, action) => {
    switch (action.type) {
      case "add":
        // khi return về state là 1 array/object, ta cần tạo ra và thay đổi
        // trên một array/object mới, và return về cái array/object mới này
        // state.push(action.color);
        // return state vì đây là return về state hiện tại chứa ko phải state mới
        // thuật toán của hàm subcribe là trỏ đến địa chỉ vùng nhớ sau đó ss bằng ===
        // vì ở đây state bằng state nên ko đổi
        return [...state, action.color];
      case "remove":
        const remove = state.filter((item) => item !== action.color);
        return remove;
      default:
        return state;
    }
  }
  export default colorReducer