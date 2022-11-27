import React from "react";
import { useSpring, animated } from "react-spring";
const UseReducer = () => {
  // const propsz = useSpring({ to: { color: 'red' }, from: { color: 'green' },config:{duration:1000} })

  //   return <animated.div style={propsz}>I will fade in</animated.div>
  const propsz = useSpring({
    color_text: "red",
    from: { color_text: "green" },
    config: { duration: 1000 },
  });
  const propszv = useSpring({
    num: 100, color:"red",
    from: { num: 10 ,color:"black" },
    config: { duration: 3000 },
  });
  const propscroll = useSpring({ scroll: 100, from: { scroll: 0 },config:{duration:1000} });
  let propsUsespring =  useSpring({
    color:[131,111,255] ,// màu sắc sau animation
    from: {
      color:[238,99,99] // màu sắc bắt đầu
    },
    config:{duration:2000,delay:1000}
  })
  // tăng font chữ tăng độ dài
  let propAnimation = useSpring({
    from:{
      width:"0%",
      height:"0%",
      fontSize:"10px"
    },
    to:async(next,cancel)=>{
      await next({width:"100%",height:"100%",fontSize:"50px"})
      await next({width:"50%",height:"50%",fontSize:"25px"})
      await next({width:"100%",height:"100%",fontSize:"50px"})
    },
    config:{duration:5000}
  })

  return (
    <div>
      <h1> change color text</h1>
      <animated.div style={{ color: propsz.color_text }}>
        I will fade in
      </animated.div>
      <hr />
      <h1>change number</h1>
      <animated.h1 style={{color:propszv.color}}>{propszv.num}</animated.h1>
      <animated.p style={{fontSize:propszv.num}}>1</animated.p>
      <hr />
      <h1>scroll</h1>
      {/* <animated.div scrollTop={propscroll.scroll}>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </animated.div> */}
      <h1>change color</h1>
      <animated.p style={{color:propsUsespring.color.interpolate((r,g,b)=>{
        return `rgb(${r},${g},${b})`
      })}}>
        hello cybersoft
      </animated.p>

      <h1>change width</h1>
      
      <animated.span className="bg-dark text-white" style={propAnimation}>
        <span>
          hello cyberlearn
        </span>
        <p>
          khóa học được thực hiện tại cyberlearn.vn
        </p>
      </animated.span>










      <br />
      <br />
      <br />
    </div>
  );
};

export default UseReducer;
