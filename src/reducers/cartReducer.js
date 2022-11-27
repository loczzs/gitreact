// InitialState
const initialState = {
  products: [
    {
      id: 1,
      name: "VinSmart Live",
      display: "AMOLED, 6.2, Full HD+",
      os: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 5700000,
      image: "./img/sp_vivo850.png",
    },
    {
      id: 2,
      name: "Meizu 16Xs",
      display: "AMOLED, FHD+ 2232 x 1080 pixels",
      os: "Android 9.0 (Pie); Flyme",
      frontCamera: "20 MP",
      backCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 7600000,
      image: "./img/sp_note7.png",
    },
    {
      id: 3,
      name: "Iphone XS Max",
      display: "OLED, 6.5, 1242 x 2688 Pixels",
      os: "iOS 12",
      backCamera: "Chính 12 MP & Phụ 12 MP",
      frontCamera: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 27000000,
      image: "./img/sp_iphoneX.png",
    },
  ],
  selectedProduct: null,
  carts: [],
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectProduct": {
      // Bởi vì state là một object, ta cần tạo ra một object mới trước khi return về state
      return { ...state, selectedProduct: action.product };
    }
    case "addToCart": {
      const index = state.carts.findIndex(
        (item) => item.id === action.product.id
      );

      // THÊM MỚI VÀO GIỎ HÀNG VÀ SET QUANTITY LÀ 1
      if (index === -1) {
        // Nếu giá trị bên trong object state là một array/object, ta cần tiếp tục tạo ra một array/object mới trước khi gán lại cho state
        const newCarts = [...state.carts, { ...action.product, quantity: 1 }];
        return { ...state, carts: newCarts };
      }

      // CẬP NHẬT QUANTITY TĂNG LÊN 1 ĐƠN VỊ
      const newCarts = state.carts.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, carts: newCarts };
    }
    case "removeProductFromCart": {
      const newCarts = state.carts.filter(
        (item) => item.id !== action.productId
      );
      return { ...state, carts: newCarts };
    }
    case "changeQua":{
      const newCarts = state.carts.map((item) => {
        if (item.id === action.productId) {
          return { ...item, quantity: item.quantity +action.pa };
        }
        return item;
      });
      return { ...state, carts: newCarts };
    }
    default: 
      return state;
  }
};

export default cartReducer;