import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from "styled-components";
import MyButton from '../components/MyButton';
import { useNavigate } from "react-router-dom";
import './SpecPage.css'
function SpecPage() {
  const tasks = useSelector((state)=>state.todo.tasks)
  const navigate = useNavigate();
  const {id} = useParams();
  const getTask = ()=> {
    for(let i=0;i<tasks.length;i++){
      if(tasks[i].id === id){
        return tasks[i];
      }
    }
    return null;
  }
  const task = getTask();
  const Box = styled.div`
    width: ${props => props.width};
    height:${props => props.height};
    box-shadow: 0px 0px 5px #CCC;
  `;
  const Wrapper = styled.div`
  text-align: -webkit-center;
  padding-top:40px;
  `
  const Title = styled.span`
    font-size: ${props =>{ return `${props.size*20}px`}};
  `

  return (
    <Wrapper className='content'>
      <Box width="600px" height="500px">
        <MyButton buttonId="backButton"  title="뒤로가기" func={()=>navigate(-1)} fontSize="5" buttonSize="3"/>
        <p>ID:{task.id}</p>
        <Title size="2">제목:{task.values.title}</Title>
        <p>내용:{task.values.desc}</p>
      </Box>
    </Wrapper>

  )


}

export default SpecPage