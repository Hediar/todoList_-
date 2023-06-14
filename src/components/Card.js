import React from 'react'
import './Card.css'
import MyButton from './MyButton';
function Card({title, deleteFunc, move, isDone, id, cardTitle, desc}) {

  const moveCard = ()=> {
    move(id);
  }
  const deleteCard = ()=>{
    deleteFunc(id)
  }
  return (
    <div className='Card'>
        <h1 className='CardTitle'>{cardTitle}</h1>
        <p className='CardDescription'>{desc}</p>
        <MyButton title="🗑️" func={deleteCard}/>
        <MyButton title={isDone ? "↩️":"✔️"} func={moveCard}/>
    </div>
  )
}

export default Card