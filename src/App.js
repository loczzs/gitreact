import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Hooks from "./10_Hooks/Hooks";
import Refs from "./11_Refs/Refs";
import Style from "./12_Style/Style";
import StyledComponent from "./13_StyledComponent/StyledComponent";
import CustomHooks from "./14_CustomHooks/CustomHooks";
import Redux from "./15_Redux/Redux";
import Home from "./1_Ex_HomePage/Home";
import cn from "classnames";
// import Movie from "./6_EXS_Movie/Movie";
// import Props from "./7_Props/Props";
import Lifecycle from "./8_Lifecycle/Lifecycle";
import Composition from "./9_Composition/Composition";
import UserManagement from "./Bt_Management/UserManagement";

import ProductManagement from "./BT_ProductManagement/ProductManagement";
// import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
import ShoppingCart from "./BT_ShoppingCartRedux/ShoppingCart";
import TodoApp from "./BT_TodoAppRedux/TodoApp";
import UseReducer from "./demoUsereducer/UseReducer";
import Ex3UseSpring from "./demoUsereducer/Ex3UseSpring";
import UseTrail from "./demoUsereducer/UseTrail/UseTrail";
import UseTransition from "./demoUsereducer/UseTransition";
import UseChain from "./demoUsereducer/UseChain";
import Modal from "./Hoc/Modal";
import DemoHocmodal from "./Hoc/DemoHocmodal";
import Tailwin from "./tailwinvss/Tailwin";
import DropDrag from "./DropDrag/DropDrag";
import DragAnDrop from "./DragAnDropdnd/DragAnDrop";
import Slick from "./ReactSlick/Slick";
// import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";
// import ShoesShop from "./7_Shopshoes/ShoesShop";

// import Movie from "./6_EXS_Movie/Movie";
// import Props from "./7_Props/Props";
// import ShoppingCart from "./BT_ShoppingCart/ShoppingCart";

// import Map from "./6_Map/Map";
// import ConditionalRendering from "./5_ConditionalRendering/ConditionalRendering";
// import SelectCar from "./4_Ex_SelectCar/SelectCar";
// import State from "./4_State/State";

// import Event from "./3_Event/Event";
// import HelloWorld from "./1_Components/HelloWorld";
// import Greeting from "./1_Components/Greeting";
// import Home from "./1_Ex_HomePage/Home";
// import Msi from "./1_Ex_MSI/Msi";
// import DataBinding from "./2_DataBinding/DataBinding";

// Component: một function return về JSX mô tả những gì sẽ được hiển thị trên giao diện
function App() {
  // JSX: Javascript XML
  // JSX là một cú pháp đặc biệt cho phép viết HTML bên trong javascript
  // Bởi vì JSX gần với JS hơn là với HTML, nên các property/attribute của thẻ HTML ta cần chuyển thành camelCase
  // VD: class -> className, for -> htmlFor, tabindex -> tabIndex
  // return (
  //   <div className="App">
  //     <h1>Hello Reactjs</h1>
  //   </div>
  // );
  // Bản chất đoạn code JSX trên sẽ được transform về JS thuần như sau
  // return React.createElement(
  //   "div", { className: "App" },
  //   React.createElement("h1", null, "Hello Reactjs")
  // );

  return (
    // 1. Components
    // <div className="text-center text-primary">
    //   <h1>App</h1>
    //   <HelloWorld />
    //   <Greeting />
    // </div>

    // <Home />
    // <Msi />

    // 2. Data Binding
    // <DataBinding />
    // 3.Event
    // <Event/>
    // 4.State
    // <State/>
    // <SelectCar/>
    //5.conditionalRendering
    //  <ConditionalRendering/>
    //6 Map
    // <Map/>
    // <Movie />
    //7 Props
    // <Props />
    // {/* <ShoesShop/> */}
    // bài tập tổng hợp
    // <ShoppingCart />
    // 8 lifecycle
    // <Lifecycle/>
    //Bt Productmanagement bài tập tổng hợp State, Props,Lifecycle
    // <ProductManagement/>
    // 9 Composition
    // <Composition/>
    // 10 Hooks
    // <Hooks/>
    //Bt UserManagement
    // <UserManagement/>
    //11 Refs
    // <Refs/>
    //12 _Style
    // <Style/>
    //13. Styled Component(css-in-js)
    // <StyledComponent/>
    //14 customHooks
    // <CustomHooks/>
    //15 redux
    // <Redux/>
    //BT shoppingcart redux
    // <ShoppingCart/>
    //Bt todoApp
    // <TodoApp/>
    // setupROuter
    // <>
    //   <Modal/>
    //   <nav className="nav justify-content-center bg-dark">
    //     {/* <Link className="nav-link" to="/">Home</Link>
    //     <Link className="nav-link" to= "Shopping-cart">Shopping Cart</Link>
    //     <Link className="nav-link" to="todoapp">Disabled link</Link> */}
        
    //     <NavLink
    //       className={({ isActive }) =>
    //         cn("nav-link", { "text-danger": isActive })
    //       }
    //       to="/"
    //     >
    //       Home
    //     </NavLink>
    //     <NavLink
    //       className={({ isActive }) =>
    //         cn("nav-link", { "text-danger": isActive })
    //       }
    //       to="Shopping-cart"
    //     >
    //       Shopping Cart
    //     </NavLink>
    //     <NavLink
    //       className={({ isActive }) =>
    //         cn("nav-link", { "text-danger": isActive })
    //       }
    //       to="todoapp"
    //     >
    //       Disabled link
    //     </NavLink>
    //     <NavLink
    //       className={({ isActive }) =>
    //         cn("nav-link", { "text-danger": isActive })
    //       }
    //       to="demoHOC"
    //     >
    //       demoHOC
    //     </NavLink>
    //   </nav>
          
    //   <Routes>
    //   <Route path="adaadad" element={<Modal />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="Shopping-cart" element={<ShoppingCart />} />
    //     <Route path="todoapp" element={<TodoApp />} />
    //     <Route path="demoHOC" element={<DemoHocmodal/>}/>
    //     {/* phải để cuối cùng */}
    //     <Route path="*" element={<h1>Not Found Page</h1>} />
    //   </Routes>
    // </>
    // useSpring
  //  <UseReducer/>
  // <Ex3UseSpring/>
  // <UseTrail/>
  // {/* <UseTransition/> */}
  // <UseChain/> 

  //HOC
  // <Modal/>
  // <Tailwin/>
  // <DropDrag/>
  // <DragAnDrop/>
  <Slick/>
  );
}

export default App;
