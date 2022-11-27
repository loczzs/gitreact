import React from 'react'
import { useDispatch } from 'react-redux'
// import { searchTodo } from '../action/todoAction'
import { changeSearch} from "../slices/todoSlice"
const SearchTodo = () => {
    const dispatch = useDispatch()
   const handleSearch =(evt)=>{
    if (evt.key !== "Enter") return;
    const {value} = evt.target
    dispatch(changeSearch(value))
    
   }
  return (
    <div className='mb-4'>
        <input type="text" className='form-control' placeholder='search your todo' onKeyDown={handleSearch} />
    </div>
  )
}

export default SearchTodo