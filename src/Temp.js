import React from 'react'
import './temp.css'

const Temp = ({temperature, backgroundColor}) => {
    const style = {
        backgroundColor: backgroundColor,
        transition: '1s',
    }
  return (
    <div style={style} className='circle'>
      <span className='degree'>{temperature}</span>
      <span className='degree'>°C</span>
    </div>
  )
}

export default Temp
