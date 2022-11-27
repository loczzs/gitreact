import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
const DragAnDrop = () => {
  const [state, setState] = useState({
    toDo: {
      id: "toDo",
      items: [
        { id: "1", name: "Task1" },
        { id: "2", name: "Task2" },
        { id: "3", name: "Task3" },
      ],
    },
    inProgress: {
      id: "inProgress",
      items: [
        { id: "4", name: "Task4" },
        { id: "5", name: "Task5" },
        { id: "6", name: "Task6" },
      ],
    },
    Done: {
      id: "Done",
      items: [
        { id: "7", name: "Task7" },
        { id: "8", name: "Task8" },
        { id: "9", name: "Task9" },
      ],
    },
  });
  const handleDragend = (result) => {
    let { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    let itemsCopy = { ...state[source.droppableId].items[source.index] };
    console.log(itemsCopy);
    // droppable bắt đầu kéo
    console.log(state[source.droppableId]);
    const index = state[source.droppableId].items.findIndex(
      (item) => item.id === itemsCopy.id
    );
    // console.log(index);
    // console.log(state[source.droppableId].items);
    state[source.droppableId].items.splice(index, 1);
    
    let dropDestination = state[destination.droppableId].items;
    dropDestination.splice(destination.index, 0, itemsCopy);
    // dropSource.splice(dropSource.index,1)
    console.log(dropDestination);

    setState(state);
  };
  return (
    <div className="container">
      <h3 className="text-center display-4">Demo DragAndDrop</h3>
      <DragDropContext onDragEnd={handleDragend}>
        <div className="row">
          {_.map(state, (statusTask, index) => {
            return (
              <Droppable droppableId={statusTask.id} key={index}>
                {(provided) => {
                  return (
                    <div className="col-4" key={index}>
                      <div
                        className="bg-dark p-5 "
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <h1 className="text-white">{statusTask.id}</h1>
                        {statusTask.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              index={index}
                              draggableId={item.id}
                            >
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="mt-3 p-3 bg-success text-center"
                                  >
                                    {item.name}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default DragAnDrop;
