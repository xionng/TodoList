// 투두리스트 보여주기 전체 부분(제목 + 내용 목록)
import styled from "styled-components";
import TodoItemList from "./TodoItemList";
import React, { useState } from "react";

export default function TodoListShow() {
  const [todoList, setTodoList] = useState([]);
  return (
    <ListWrap>
      <Title>TODO.</Title>
      <TodoItemList
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      ></TodoItemList>
    </ListWrap>
  );
}

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
