import React from "react";
import { useSprings, animated } from "react-spring";

const Ex3UseSpring = () => {
  let arrOpacity = [
    { opacity: 0.1, color: "red", content: "Fullstack", num: 100 },
    { opacity: 0.3, color: "blue", content: "Fe", num: 200 },
    { opacity: 0.5, color: "green", content: "BE", num: 300 },
    { opacity: 0.7, color: "orange", content: "Data", num: 50 },
    { opacity: 1, color: "purple", content: "Full", num: 150 },
  ];
  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => {
      return {
        opacity: item.opacity,
        color: item.color,
        content: item.content,
        num: item.num,
        from: {
          opacity: 0,
          color: "black",
          content: item.content,
          num:0,
        },
        config: {
          duration: 3000,
        },
      };
    })
  );
  console.log(propsAnimationUseSprings.length);
  let renderContent = (props)=>{ // trường hợp khác thẻ
    // let resultprop =[<animated.h1 style={props} key={1}>
    //   {props.num}
    // </animated.h1>,<animated.span style={props} key={2}>
    //         {props.content}
    //       </animated.span> ];
    // trường hợp cùng thẻ
    let resultprop =[]
    for(let key in props){
      if(key === "content" || key ==="num"){
        resultprop.push(<animated.h1 style={props} >
          {props[key]}
        </animated.h1>

     )
      }
    }
   return resultprop
    
  }
  return (
    <div>
      {propsAnimationUseSprings.map((props, index) => {
        return (
          <div>
          {/* c1 */}
          {/* <animated.span style={props} key={index}>
            {props.num}
          </animated.span>
          <animated.span style={props} key={index}>
            {props.content}
          </animated.span> */}
          {/* c2 */}
          {renderContent(props)}
          </div>
        );
      })}
    </div>
  );
};

export default Ex3UseSpring;
