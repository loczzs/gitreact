import React from "react";
// import { deleteTodo } from "../action/todoAction";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../action/todoAction";
import { deleteTodo } from "../slices/todoSlice";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (evt) => {
    evt.stopPropagation()
    dispatch(deleteTodo(todo.id));
  };
  const handleToggle = () => {
   dispatch(toggleTodo(todo))
  };
  return (
    <div
    key={todo.id}
      className={cn("card mb-3 bg-white", {
        "opacity-75": todo.isDone,
      })}
      onClick={handleToggle}
    >
      <div className="card-body d-flex justify-content-between">
        <h3
          className={cn({
            "text-decoration-line-through text-secondary": todo.isDone,
          })}
        >
          {todo.tittle}
        </h3>
        <div>
          <button className="btn btn-danger" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
