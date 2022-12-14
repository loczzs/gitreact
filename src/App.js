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

// Component: m???t function return v??? JSX m?? t??? nh???ng g?? s??? ???????c hi???n th??? tr??n giao di???n
function App() {
  // JSX: Javascript XML
  // JSX l?? m???t c?? ph??p ?????c bi???t cho ph??p vi???t HTML b??n trong javascript
  // B???i v?? JSX g???n v???i JS h??n l?? v???i HTML, n??n c??c property/attribute c???a th??? HTML ta c???n chuy???n th??nh camelCase
  // VD: class -> className, for -> htmlFor, tabindex -> tabIndex
  // return (
  //   <div className="App">
  //     <h1>Hello Reactjs</h1>
  //   </div>
  // );
  // B???n ch???t ??o???n code JSX tr??n s??? ???????c transform v??? JS thu???n nh?? sau
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
    // b??i t???p t???ng h???p
    // <ShoppingCart />
    // 8 lifecycle
    // <Lifecycle/>
    //Bt Productmanagement b??i t???p t???ng h???p State, Props,Lifecycle
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
    //     {/* ph???i ????? cu???i c??ng */}
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
