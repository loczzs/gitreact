import React from "react";
import { useSpring, animated, useTrail } from "react-spring";
import { useState } from "react";

const items = [
  { title: "FE", content: "cyber" },
  { title: "FE1", content: "cyber1" },
  { title: "FE2", content: "cyber2" },
];
const UseTrail = () => {
  let [status, setStatus] = useState(false);
  //c1 k có setColor
  //   const proptrail = useTrail(items.length, {
  //       // config: { mass: 5, tension: 2000, friction: 200 },

  //       opacity: status ? 1 : 0,
  //           x: status ? 0 : 20,
  //           height: status  ? 50 : 0,
  //           color:"red",
  //           marginLeft: status ? 50 : 0,
  //           config:{duration:1000},
  //           from: { opacity: 0, x: 20, height: 0, color:'green' },

  //     })

  const [proptrail, set, stop] = useTrail(items.length, () => {
    // config: { mass: 5, tension: 2000, friction: 200 },
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 50 : 0,
      color: "red",
      config: { duration: 1000 },
      from: { opacity: 0, x: 20, height: 0, color: "green" },
      //   marginLeft: status ? 50 : 0,
    };
  });
//   stop()
  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 50 : 0,
    color: "red",
    config: { duration: 2000 },
    from: { opacity: 0, x: 20, height: 0, color: "green" },
  });
  

  return (
    <div>
    <button
        className="mt-5"
        onClick={() => {
          setStatus(!status);
        }}
      >
        setStatus
      </button>
      
      {proptrail.map((propUserSprings, index) => {
        return (
          <animated.h1 key={index} style={propUserSprings}>
            {items[index].title}
            {/* {console.log(items[index].title)} */}
          </animated.h1>
        );
      })}
      {/* c1 */}
      <button
        className="mt-5"
        onClick={() => {
          setStatus(!status);
        }}
      >
        setStatus
      </button>
      
      
      <button
        className="mt-3"
        onClick={() => {
          set({ color: "pink" });
        }}
      >
        setColor
      </button>
    </div>
  );
};

export default UseTrail;
