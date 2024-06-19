// 투두리스트 입력받기
import { Wrap, GetWrap, ListGet, InputBtn } from "./common.js";
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function TodoListGet({ todoList, setTodoList }) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddBtn = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    });
    setTodoList(nextTodoList);

    setText("");
    inputRef.current.focus();
  };

  return (
    <Wrap>
      <GetWrap>
        <ListGet
          type="text"
          name="todoItem"
          value={text}
          ref={inputRef}
          placeholder="TODO LIST를 입력하세요"
          onChange={onChangeInput}
        />
        <InputBtn onClick={onClickAddBtn}>추가하기</InputBtn>
      </GetWrap>
    </Wrap>
  );
}

TodoListGet.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};
