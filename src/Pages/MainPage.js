import React from "react";
import CardContainer from "../components/CardContainer";
import { useState } from "react";
import MyButton from "../components/MyButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, addTasks } from "../redux/modules/todo";
import "./MainPage.css";
function MainPage() {
  const [values, setValues] = useState({
    title: "",
    desc: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    let prevTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (prevTodoList && prevTodoList.constructor === Array) {
      dispatch(addTasks(prevTodoList));
    }
  }, []);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const createTask = (e) => {
    e.preventDefault();
    if (
      values.title.length === 0 ||
      values.title === undefined ||
      values.title === null ||
      values.desc.length === 0 ||
      values.desc === undefined ||
      values.desc === null
    ) {
      return;
    }
    setValues({ title: "", desc: "" });
    dispatch(addTask(values));
  };

  return (
    <div className="content">
      <form className="add-form">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onChange}
          value={values.title}
        />
        <label>내용</label>
        <input
          type="text"
          name="desc"
          onChange={onChange}
          value={values.desc}
        />
        <MyButton func={createTask} title="추가하기" />
      </form>

      <CardContainer title="Working" />
      <CardContainer title="Done" />
    </div>
  );
}

export default MainPage;
