import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { animated, to, useSpring } from "react-spring";
import "./DemodraDrop.css";
const defaultValue = [
  { id: 1, taskName: "Task1" },
  { id: 2, taskName: "Task2" },
  { id: 3, taskName: "Task3" },
  { id: 4, taskName: "Task4" },
  { id: 5, taskName: "Task5" },
];

const DropDrag = () => {
  const [taskList, setTaskList] = useState(defaultValue);
  const tagDrag = useRef({});
  const tagDragEnterz = useRef({});
  const [propSpring, set, stop] = useSpring(() => ({
    from: { bottom: -25 },
    to: { bottom: 0 },
    config:{duration:250},
    reset:true
  }));
  
  const handleDragstart = (e, task, index) => {
    console.log("tag", e.target);
    console.log("task", task);
    console.log("index", index);
    tagDrag.current = task;
  };
  const handleDragEnter = (e, taskDragEnter, index) => {
    // lấy giá trị của task được lấy ngang qua
    set({bottom:0})
    tagDragEnterz.current = { ...taskDragEnter };

    let taskListUpdate = [...taskList];
    // lấy index thằng bị kéo qua
    let indexDrag = taskListUpdate.findIndex(
      (task) => task.id === tagDrag.current.id
    );
    // lấy index thằng bị kéo
    let indexDragEnter = taskListUpdate.findIndex(
      (task) => task.id === taskDragEnter.id
    );
    // biến chứa giá trị thằng đang kéo
    let temp = taskListUpdate[indexDrag];
    // lấy giá trị tại vị trí đang kéo = thằng kéo qua
    taskListUpdate[indexDrag] = taskListUpdate[indexDragEnter];
    // lấy thằng kéo qua gán bằng thằng kéo
    taskListUpdate[indexDragEnter] = temp;

    setTaskList(taskListUpdate);
  };
  const handleDragend = (e) => {
    // console.log("dragend", e.target);
    // tagDrag.current = {};
    // setTaskList([...taskList]);
  };
  const handleDrop = (e) => {
    console.log("drop", e.target);
  };
  return (
    <div className="container" onDragOver={(e)=>{
      e.preventDefault();
  e.stopPropagation();
    }} onDrop={(e)=>{
      tagDrag.current = {};
    setTaskList([...taskList]);
    }}>
      <div className="text-center display-4"> Task list</div>
      <div className="row">
        <div className="col-4" draggable="true" onDrop={(e) => handleDrop(e)}>
          adadad
        </div>
        <div className="bg-dark p-5 col-4">
          {taskList.map((task, index) => {
            let cssDragTag = task.id === tagDrag.current.id ? "dragTag" : " ";
            if (task.id === tagDragEnterz.current.id) {
              return (
                <animated.div
                style={{position:"relative",
                bottom:propSpring.bottom.interpolate(numBottom=> `${numBottom}px`)}}
                  onDragEnter={(e) => handleDragEnter(e, task, index)}
                  onDragEnd={(e) => handleDragend(e)}
                  onDragStart={(e) => handleDragstart(e, task, index)}
                  key={index}
                  draggable="true"
                  className={`bg-success text-white mt-1 p-3  `}
                >
                  {task.taskName}
                </animated.div>
              );
            }

            return (
              <div
                onDragEnter={(e) => handleDragEnter(e, task, index)}
                onDragEnd={(e) => handleDragend(e)}
                onDragStart={(e) => handleDragstart(e, task, index)}
                key={index}
                draggable="true"
                className={`bg-success text-white mt-1 p-3 ${cssDragTag} `}
              >
                {task.taskName}
              </div>
            );
          })}
        </div>
        <div style={{ height: "500px" }} className="col-4 bg-primary">
          adadad
        </div>
      </div>
    </div>
  );
};

export default DropDrag;
// onDragOver={(e) => {
//   e.preventDefault();
//   e.stopPropagation();
// }}
// draggable="true"
// onDrop={(e) => handleDrop(e)}
