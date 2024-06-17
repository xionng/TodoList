import Calendar from "../components/Calendar";
import TodoItemList from "../components/TodoItemList";
import TodoListGet from "../components/TodoListGet";
import styled from "styled-components";
import { useState } from "react";

export default function Main() {
  const [todoList, setTodoList] = useState([]);
  return (
    <MainWrap>
      <MainTop>
        <Calendar />
        <EditWrap>
          <TodoListGet todoList={todoList} setTodoList={setTodoList} />
        </EditWrap>
      </MainTop>
      <ListWrap>
        <Title>TODO.</Title>
        <TodoItemList
          todoList={todoList}
          setTodoList={setTodoList}
          checkedList={false}
        ></TodoItemList>
      </ListWrap>
    </MainWrap>
  );
}
const MainWrap = styled.section`
  width: 100wh;
  height: 100vh;
  padding-left: 155px;
  padding-right: 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainTop = styled.section`
  display: flex;
`;

const EditWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;
  background: #fff;
  width: 780px;
  height: 300px;
`;

const ListWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;

  background: #fff;
  width: 1180px;
  height: 340px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  color: #4e6466;
  /* background-color: #000; */
  font-size: 30px;
  font-weight: 700;

  width: 1100px;
  border-bottom: #97b3b5 solid 3px;
  padding-bottom: 10px;
  margin-top: 10px;
`;
