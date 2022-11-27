import React from "react";
import{gettodos} from "../action/todoAction"
import { useDispatch } from 'react-redux'
import { changeFilter } from "../slices/todoSlice"
const FilterTodo = () => {
  const dispatch = useDispatch()
  const handleFilter=(filter)=>{
    // console.log(filter)
    dispatch(changeFilter(filter))
  }
  return (
    <div className="btn-group ms-4" role="group" aria-label="Basic example">
      <button onClick={()=>handleFilter("all")} type="button" className="btn btn-primary">
        All
      </button>
      <button onClick={()=>handleFilter("active")} type="button" className="btn btn-success">
        Active
      </button>
      <button onClick={()=>handleFilter("done")} type="button" className="btn btn-danger">
       Done
      </button>
    </div>
  );
};


export default FilterTodo;
