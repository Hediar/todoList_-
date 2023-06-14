import React from 'react'
import CardContainer from '../components/CardContainer'
import { useState } from 'react';
import uuid from 'react-uuid';
import MyButton from '../components/MyButton';
import { useEffect } from 'react';
import './MainPage.css'
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
    if(values.title.length===0 || values.title===undefined || values.title === null
      ||values.desc.length===0 || values.desc===undefined || values.desc === null){
        return;
      }
    const newList = [{id:uuid(), isDone:false, values}, ...todoList]
    setTodoList(newList);
    setValues({title:"",desc:""});
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
  const saveTask=(id,obj)=>{
    const newList = todoList.map(task=>{
      if(task.id===id){
        return {...task, values:{...obj}}
      }else{
        return {...task}
      }
    })
    setTodoList(newList);
  }
  return (
    <div className='content'>


        <form className='add-form'>

            <label>제목</label><input type="text" name="title" onChange={onChange} value={values.title} />
            <label>내용</label><input type="text" name="desc" onChange={onChange} value={values.desc} />
            <MyButton func={createTask} title="추가하기"/>

        </form>

      <CardContainer deleteFunc={deleteTask} save={saveTask} move={moveTask} title="working" tasks={todoList} />
      <CardContainer deleteFunc={deleteTask} save={saveTask} move={moveTask} title="done" tasks={todoList} />

    </div>
  )
}

export default MainPage