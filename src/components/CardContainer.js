import React from 'react'
import Card from './Card'
import './CardContainer.css'
function CardContainer({deleteFunc, move, title, tasks, save}) {
    return (
    <div className='card-container'>
        <h2>{title}</h2>
        <div className='card-section'>
            {tasks.map(task=>{
                if(title==="Working" && !task.isDone){
                    return <Card 
                    title={title} 
                    deleteFunc={deleteFunc}
                    save={save}
                    move={move} 
                    isDone={task.isDone} 
                    id={task.id} 
                    cardTitle={task.values.title} 
                    desc={task.values.desc} 
                    />
                }
                else if(title==="Done" && task.isDone){
                    return <Card 
                    title={title} 
                    deleteFunc={deleteFunc} 
                    save={save}
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