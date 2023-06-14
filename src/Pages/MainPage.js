import React from 'react'
import CardContainer from '../components/CardContainer'
import { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from '../components/MyButton';
import { useEffect } from 'react';
function MainPage() {
  const [values, setValues] = useState({
    title:"",
    desc:""
  });

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let prevTodoList = JSON.parse(localStorage.getItem("todoList"));
   
    if(prevTodoList.constructor === Array){
      setTodoList(prevTodoList)
    }
  }, [])



  const onChange=(e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }
  const createTask=(e)=>{
    e.preventDefault();
    const newList = [{id:uuid(), isDone:false, values}, ...todoList]
    setTodoList(newList);
    localStorage.setItem("todoList",JSON.stringify(newList));
  }
  const deleteTask=(id)=>{
    const newList = todoList.filter(task => task.id!==id)
    setTodoList(newList);
    localStorage.setItem("todoList",JSON.stringify(newList));
  }
  const moveTask=(id)=>{
    const newList = todoList.map(task=>{
      if(task.id===id){
        return {...task, isDone:!task.isDone}
      }else{
        return {...task}
      }
    })
    localStorage.setItem("todoList",JSON.stringify(newList));
    setTodoList(newList);
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