import React from 'react'
import Card from './Card'
import './CardContainer.css'
import { useSelector } from 'react-redux'
function CardContainer({title}) {
    const tasks = useSelector((state)=>state.todo.tasks)
    return (
    <div className='card-container'>
        <h2>{title}</h2>
        <div className='card-section'>
            {tasks.map(task=>{
                if(title==="Working" && !task.isDone){
                    return <Card 
                    title={title} 
                    isDone={task.isDone} 
                    id={task.id} 
                    cardTitle={task.values.title} 
                    desc={task.values.desc} 
                    />
                }
                else if(title==="Done" && task.isDone){
                    return <Card 
                    title={title} 
                    isDone={task.isDone} 
                    id={task.id} 
                    cardTitle={task.values.title} 
                    desc={task.values.desc} 
                    />
                }
            })}
        </div>
    </div>
    )
}

export default CardContainer