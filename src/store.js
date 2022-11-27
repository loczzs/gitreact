// FIle dùng để cấu hình redux
import { configureStore } from "@reduxjs/toolkit";
// import countReducer from "./reducers/countReducer";
import colorReducer from "./reducers/colorReducer";
import cartReducer from "./reducers/cartReducer";
// import todoReducer from "./reducers/todoReducer";
import countReducer from "./slices/countSlice";
import todoReducer from "./slices/todoSlice";
// tạo ra 1 cái store để lưu trữ state
// Khai báo state là một reducer, là một function nhận vào 2 tham số và return về một giá trị state mới
// configureStore đã bao gồm cấu hình thư viện redux thunk cho phép viết các async action
const store = configureStore({
  reducer: {
    count: countReducer,
    colors: colorReducer,
    cart: cartReducer,
    todo: todoReducer,
  },
});
// console.log(strore.reducer.cart)
//=====================================================================================================================================
// // store.getState(): là hàm dùng để truy cập vào state của redux store
// console.log("Default state",store.getState());
// // store.subscribe(): là hàm dùng để lắng nghe sự thay đổi của state trong redux store, khi state thay đổi, callback bên trong hàm subscribe sẽ được gọi tới.
// store.subscribe(() => console.log("State changes", store.getState()));
// // // Không được quyền thay đổi trực tiếp state
// // // store.getState().count = 20 // state thay đổi nhưng không chạy vào callback của hàm subscribe

// // // Để thay đổi state của redux store ta cần thông qua 1 action
// // // action bản chất là 1 object có 1 thuộc tính bắt buộc là type, dùng để mô tả cho redux store biết sẽ thay đổi state như thế nào
// store.dispatch({ type: "increase" }); // state count + 1
// store.dispatch({ type: "increaseByAmount", amount: 10 }); // state count + 10
// ================================================================================
export default store;
// import { createStore, applyMiddleware,combineReducers } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { rootSaga } from './redux-saga/sagas/rootSaga'
// import todoReducer from './reducers/todoReducer'
// const sagaMiddleware = createSagaMiddleware()
// // sagaMiddleware.run(rootSaga)
// const rootReducer = combineReducers({
//     todoReducer
// })

// const store = createStore(applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(rootSaga)

// export default store



