import React from "react";
import "./style.css";

import cssstyles from "./style.module.css"
import scss from "./style.module.scss"
// console.log(cssstyles)
const Style = () => {
  return (
    <div>
    {/* CSS */}
      <h1>Style</h1>
      <h3 className="title">css </h3>
      {/* CSS Module */}
      <h3 className={cssstyles.title}>css Module </h3>
      <div className={cssstyles.productItem}>i phone 13 </div>
      <h3 className={scss.title}>scss Module</h3>
      <ul className={scss.list}>
        <li className={scss.item}>Home</li>
        <li className={scss.item}>About</li>
        <li className={scss.item}>Contact</li>
      </ul>

      <li className={scss.item}>Contact</li>
    </div>
  );
};

export default Style;
