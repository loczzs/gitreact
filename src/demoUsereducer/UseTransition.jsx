import React from "react";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
const UseTransition = () => {
  
  let [arrItem, setArrayitem] = useState([
    { id: 1, title: "FE", content: "cyber" },
    { id: 2, title: "FE1", content: "cyber1" },
    { id: 3, title: "FE2", content: "cyber2" },
  ]);
  const [article, setArticel] = useState({
    id: "",
    title: "",
    content: "",
  });
  const propsUserTransition = useTransition(
    arrItem.map((item) => item),
    {
      from: { transform: "translate3d(0,-40px,0)" },
      enter: { transform: "translate3d(0,0px,0)" },
      leave: { transform: "translate3d(0,-150px,0)", opacity: 0.5 },
      config: { duration: 1000 },
    }
  );
  const deleteItem = (id) => {
    setArrayitem([...arrItem.filter((item) => item.id !== id)]);
  };
  let rederItem = () => {
    return propsUserTransition((props, item, key, index) => {
      return (
        <animated.div
          style={props}
          key={index}
          className="bg-dark text-white p-3 mt-2"
        >
          <div className=" text-end">
            <button
              className="btn btn-danger text-right"
              onClick={() => deleteItem(item.id)}
            >
              delete
            </button>
          </div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>
      );
    });
  };
  let handleChange = (e) => {
    let { value, name } = e.target;
    setArticel({
      ...article,
      [name]: value,
    });
  };
  let handleSubmit = () => {
    let item = { ...article, id: Date.now() };
    setArrayitem([...arrItem, item]);
    // console.log(item)
  };
  
  return (
    <div className="container pb-5">
      {rederItem()}
      <div className="form-group">
        <h3>title</h3>
        <input
          type="text "
          className="form-control"
          name="title"
          onChange={handleChange}
        />
        <h3>content</h3>
        <input
          type="text "
          className="form-control"
          name="content"
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={handleSubmit}>
          add
        </button>
      </div>
    </div>
  );
};

export default UseTransition;
