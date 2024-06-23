import { Wrap, ListGet, InputBtn } from "./common.js";
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TodoListGet = ({ date, onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAddTodo({ date, content: newTodo, user_id: 1 }); // 예시로 user_id는 1로 설정
      setNewTodo("");
    }
  };

  return (
    <Wrap>
      <TodoListHeader>{date.toDateString()}</TodoListHeader>
      <TodoForm onSubmit={handleSubmit}>
        <ListGet
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="TODO LIST를 입력하세요"
        />
        <InputBtn type="submit">추가하기</InputBtn>
      </TodoForm>
    </Wrap>
  );
};

export default TodoListGet;

const TodoListHeader = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #4e6466;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

TodoListGet.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onAddTodo: PropTypes.func.isRequired,
};
