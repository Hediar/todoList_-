import uuid from 'react-uuid';
//types
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const MODIFY_TASK = 'MODIFY_TASK';
const ADD_TASKS = 'ADD_TASKS';

// Initial State
const initialState = {
    tasks:JSON.parse(localStorage.getItem("todoList"))
};
//action creator
export const addTask=(payload)=>{
    return{
        type:ADD_TASK,
        payload
    }
}
export const removeTask=(payload)=>{
    return{
        type:REMOVE_TASK,
        payload,
    }
}
export const toggleTask=(payload)=>{
    return{
        type:TOGGLE_TASK,
        payload
    }
}
export const modifyTask=(payload)=>{
    return{
        type:MODIFY_TASK,
        payload
    }
}
export const addTasks=(payload)=>{
    return{
        type:ADD_TASKS,
        payload
    }
}
  
// 리듀서
const todo = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:{
            const curDate = new Date()
            const newTask ={id:uuid(), isDone:false, createdAt:curDate, values:action.payload};
            const resultArr = [...state.tasks];
            resultArr.push(newTask)
            localStorage.setItem("todoList",JSON.stringify(resultArr));
            return {
                tasks:resultArr
            }
        }
        case REMOVE_TASK:{
            let resultArr = [...state.tasks];
            resultArr = resultArr.filter(task => task.id!==action.payload);
            localStorage.setItem("todoList",JSON.stringify(resultArr));
            return {
                tasks:resultArr
            }
        }
        case MODIFY_TASK:{
            console.log(action.payload)
            let resultArr = [...state.tasks];
            resultArr = resultArr.map(task=>{
                if(task.id===action.payload.id){
                  return {...task, values:{...action.payload.values}};
                }else{
                  return {...task};
                }
              })
            localStorage.setItem("todoList",JSON.stringify(resultArr));
            return {
                tasks:resultArr
            }
        }
        case TOGGLE_TASK:{
            let resultArr = [...state.tasks];
            resultArr = resultArr.map(task=>{
                if(task.id===action.payload){
                  return {...task, isDone:!task.isDone}
                }else{
                  return {...task}
                }
              })
            localStorage.setItem("todoList",JSON.stringify(resultArr));
            return {
                tasks:resultArr
            }
        }
        case ADD_TASKS:{
            return {
                tasks:action.payload
            }
        }
        default:
        return state;
    }
};
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default todo;