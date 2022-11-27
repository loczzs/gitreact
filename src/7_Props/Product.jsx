import React from 'react'

const Product = (props) => {
    const { productz } = props // es6 detchurturing
  return (
    <div className='card'>
        <div className='card-header'>phone</div>
        <div className='card-body'>
            <h3 className='card-title'>{productz.name}</h3>
            <p className='"card-text'> {productz.price}</p>
        </div>

    </div>
  )
}

export default Product