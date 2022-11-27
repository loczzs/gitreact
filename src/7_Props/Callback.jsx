import React from 'react'
// các bước truyền dữ liệu từ hàm con lên hàm cha
const Callback = ({onClick}) => {
  
  const handleClick = ()=>{  
    // Gọi tới prop onClick và truyền kèm data
    onClick("locle") // xem sơ đồ trong img 
    // tương đương gọi tới hàm handleClick('locle') của component Props
  }
  return (
    <div>
        <button className='btn btn-success' onClick={handleClick}>clicker</button>
    </div>
  )
}

export default Callback