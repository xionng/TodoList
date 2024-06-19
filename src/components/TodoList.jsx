// import { useState } from "react";
import styled from "styled-components";
import TodoListGet from "./TodoListGet";
import React from "react";

export default function TodoList() {
  return (
    <>
      <EditWrap>
        <TodoListGet />
      </EditWrap>
    </>
  );
}

const EditWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;
  background: #fff;
  width: 780px;
  height: 300px;
`;
