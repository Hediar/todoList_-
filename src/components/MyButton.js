import React from 'react'
import './MyButton.css'
function MyButton(props) {
  return (
    <button className='MyButton' onClick={props.func}>{props.title}</button>
  )
}

export default MyButton