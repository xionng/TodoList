// 투두리스트 내용(한 줄)
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import React, { useState, useRef } from "react";

const TodoItem = ({ todoItem, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);
  const editInputRef = useRef(null);

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));
    setTodoList(nextTodoList);
  };

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  const onClickEditBtn = () => {
    if (edited) {
      const nextTodoList = todoList.map((item) =>
        item.id === todoItem.id ? { ...item, text: newText } : item
      );
      setTodoList(nextTodoList);
    }
    setEdited(!edited);
  };
  const onClickDelBtn = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
    }
  };
  return (
    <>
      <TodoListSection>
        <TodoItemSection>
          <TodoCheck
            type="checkbox"
            checked={todoItem.checked}
            onChange={onChangeCheckbox}
          />
          {edited ? (
            <Todocontent
              type="text"
              value={newText}
              ref={editInputRef}
              onChange={onChangeEditInput}
            />
          ) : (
            <TodoContent checked={todoItem.checked}>
              {todoItem.text}
            </TodoContent>
          )}
        </TodoItemSection>
        <TodoBtn>
          <EditBtn onClick={onClickEditBtn}>{edited ? "완료" : "수정"}</EditBtn>
          <DelBtn onClick={onClickDelBtn}>삭제</DelBtn>
        </TodoBtn>
      </TodoListSection>
    </>
  );
};

export default TodoItem;

const TodoListSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  border-bottom: #97b3b5 solid 1px;
  padding: 0px 10px 0px 10px;
  margin-bottom: 5px;
`;
const TodoItemSection = styled.section`
  display: flex;
`;
const TodoCheck = styled.input`
  background-color: aqua;
  margin-right: 10px;
`;
const TodoContent = styled.span`
  color: #4e6466;
  ${(props) =>
    props.checked &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
`;
const Todocontent = styled.input`
  color: #4e6466;
`;
const TodoBtn = styled.section`
  display: flex;
`;
const EditBtn = styled.button`
  border-radius: 10px;
  background: #97b3b5;
  margin-right: 5px;
  font-size: 12px;
  width: 55px;
  height: 40px;
  color: #f5fffe;
  font-weight: 700;
`;
const DelBtn = styled.button`
  border-radius: 10px;
  background: #c3e1e3;
  color: #4e6466;
  font-size: 12px;
  width: 55px;
  height: 40px;
  font-weight: 700;
`;

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired, // 추가된 부분
  }).isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired, // 추가된 부분
    })
  ).isRequired,
  setTodoList: PropTypes.func.isRequired,
};
