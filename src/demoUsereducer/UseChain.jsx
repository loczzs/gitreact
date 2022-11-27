import React from 'react'
import { useState } from 'react'
import { useSpring , useTransition ,animated, useChain,useSpringRef } from 'react-spring'
import { useRef } from 'react'

const UseChain = () => {
    let [arrItem, setArrayitem] = useState([
        { id: 1, title: "FE", content: "cyber" },
        { id: 2, title: "FE1", content: "cyber1" },
        { id: 3, title: "FE2", content: "cyber2" },
        { id: 4, title: "FEz2", content: "cyadaber2" }
      ]);
      const springRef = useSpringRef()
      
    const propsAnim = useSpring({opacity:1,width:"100%",height:'100%',ref:springRef,from:{opacity:0,width:"0",height:'0'},config:{duration:1000}})
    const transitionRef = useSpringRef()
    const propsUserTransition = useTransition(arrItem.map((item) => item) , {
   
        from: { transform: "translate3d(0,-40px,0)" },
        enter: { transform: "translate3d(0,0px,0)",opacity:1,width:"50%",height:'100%' },
        leave: { transform: "translate3d(0,-150px,0)" , opacity:0,width:"0%",height:'0%' },
        config:{duration:1000},
        ref:transitionRef
      }); 
      useChain([springRef,transitionRef])
      const deleteItem = (id) => {
        setArrayitem([...arrItem.filter((item) => item.id !== id)]);
      };
  return (
    <div>
        <animated.div style={propsAnim}>
            { propsUserTransition((props, item, key, index) => {
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
      }
  )}
        </animated.div>
    </div>
   )
}

export default UseChain