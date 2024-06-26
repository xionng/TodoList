// 투두리스트 내용 모음
import TodoItem from "./TodoItem";
import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const TodoItemList = ({ todoList, setTodoList }) => (
  <TodoUl>
    {todoList &&
      todoList.map((todoItem) => {
        if (todoItem.deleted) return null;
        return (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
  </TodoUl>
);

export default TodoItemList;

const TodoUl = styled.ul``;

TodoItemList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTodoList: PropTypes.func.isRequired,
};
