import React from 'react'
import CardContainer from '../components/CardContainer'
import { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from '../components/MyButton';
function MainPage() {
  const [values, setValues] = useState({
    title:"",
    desc:""
  });

  const [todoList, setTodoList] = useState([]);

  const onChange=(e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  const createTask=(e)=>{
    e.preventDefault();
    setTodoList([{id:uuid(), isDone:false, values}, ...todoList]);
  }
  const deleteTask=(id)=>{
    setTodoList(todoList.filter(task => task.id!==id));
  }
  const moveTask=(id)=>{
    setTodoList(todoList.map(task=>{
      if(task.id===id){
        return {...task, isDone:!task.isDone}
      }else{
        return {...task}
      }
    }));
  }
  
  return (
    <div className='Content'>

      <div className='AddForm'>
        <form>
          <p>제목</p><input type="text" name="title" onChange={onChange} value={values.title} />
          <p>내용</p><input type="text" name="desc" onChange={onChange} value={values.desc} />
          <MyButton func={createTask} title="추가하기"/>
        </form>
      </div>

      <CardContainer deleteFunc={deleteTask} move={moveTask} title="working" tasks={todoList} />
      <CardContainer deleteFunc={deleteTask} move={moveTask} title="done" tasks={todoList} />

    </div>
  )
}

export default MainPage