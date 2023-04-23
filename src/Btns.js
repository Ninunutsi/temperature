import React from 'react'
import './temp.css'

const Btns = ({increase, decrease}) => {
  return (
    <div className='btns'>
      <button onClick={increase} className='btn'>+</button>
      <button onClick={decrease} className='btn'>-</button>
    </div>
  )
}

export default Btns
