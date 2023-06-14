import React from 'react'
import Card from './Card'
import './CardContainer.css'
function CardContainer({deleteFunc, move, title, tasks}) {
    return (
    <div className='CardContainer'>
        <h2>{title}</h2>
        <div className='CardSection'>
            {tasks.map(task=>{
                if(title==="working" && !task.isDone){
                    return <Card 
                    title={title} 
                    deleteFunc={deleteFunc} 
                    move={move} 
                    isDone={task.isDone} 
                    id={task.id} 
                    cardTitle={task.values.title} 
                    desc={task.values.desc} 
                    />
                }
                else if(title==="done" && task.isDone){
                    return <Card 
                    title={title} 
                    deleteFunc={deleteFunc} 
                    move={move} 
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