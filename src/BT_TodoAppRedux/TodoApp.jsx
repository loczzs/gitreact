import axios from 'axios'
import React ,{useEffect}from 'react'
import { useDispatch } from 'react-redux'
import AddTodo from './AddTodo'
import FilterTodo from './FilterTodo'
import TodoList from './TodoList'

import{gettodos} from "../slices/todoSlice"
import todoReducer from '../reducers/todoReducer'
import { useSelector } from 'react-redux'
import SearchTodo from './SearchTodo'
const TodoApp = () => {
  const dispatch = useDispatch()
  const { filter, search } = useSelector((state) => state.todo);
  // const fetchTodos =  async()=>{
  //   try{
  //     const{data} = await axios.get(
  //       "https://62f8549b3eab3503d1d55ce4.mockapi.io/todo"
  //     );
  //     dispatch({type:"gettodos",data})
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  useEffect(()=>{
   dispatch(gettodos())
   console.log("sffjad")
  },[filter,search])
  return (
    <div style={{ minHeight: "100vh" }} className="bg-secondary">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-warning">My Todos</h1>

            <div className="d-flex justify-content-between mb-5">
              <AddTodo />
              <FilterTodo />
            </div>

            <SearchTodo/>
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoApp