import React, { useState } from "react";
import styled, { css } from "styled-components";

const TodoItem = ({ todos, onDeleteTodo, onCompleteTodo }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editContent, setEditContent] = useState("");

  // 수정
  const handleEdit = (todo) => {
    setEditTodoId(todo.todo_id);
    setEditContent(todo.content);
  };

  // 수정(취소)
  const handleCancelEdit = () => {
    setEditTodoId(null);
    setEditContent("");
  };

  // 수정(완료)
  const handleSaveEdit = (todo) => {
    handleCancelEdit();
    setEditContent(todo.content);
  };

  // 완료 체크
  const handleComplete = (todo_id) => {
    onCompleteTodo(todo_id);
  };

  return (
    <TodoList>
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItemWrapper key={todo.todo_id}>
            {editTodoId === todo.todo_id ? (
              <EditSection>
                <EditInput
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <EditButton onClick={() => handleSaveEdit(todo.todo_id)}>
                  완료
                </EditButton>
                <CancelButton onClick={handleCancelEdit}>취소</CancelButton>
              </EditSection>
            ) : (
              <DisplaySection>
                <Checkbox
                  type="checkbox"
                  checked={todo.is_checked}
                  onChange={() => handleComplete(todo.todo_id)}
                />
                <TodoContent>{todo.content}</TodoContent>
                <EditButton onClick={() => handleEdit(todo)}>수정</EditButton>
                <DeleteButton onClick={() => onDeleteTodo(todo.todo_id)}>
                  삭제
                </DeleteButton>
              </DisplaySection>
            )}
          </TodoItemWrapper>
        ))
      ) : (
        <NoTodos>TODO LIST가 아직 없습니다.</NoTodos>
      )}
    </TodoList>
  );
};

export default TodoItem;

const TodoList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const TodoItemWrapper = styled.li`
  margin-bottom: 10px;
  border-bottom: 1px solid #97b3b5;
  width: 1000px;
`;

const EditSection = styled.div`
  display: flex;
  align-items: center;
`;

const EditInput = styled.input`
  flex: 1;
  width: 500px;
  height: 20px;
  background-color: #fff;
  color: #4e6466;
  margin-right: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const EditButton = styled.button`
  background-color: #97b3b5;
  color: #f5fffe;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 5px;
`;

const CancelButton = styled.button`
  background-color: #c3e1e3;
  color: #4e6466;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;

const DisplaySection = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.strong`
  margin-right: 10px;
`;

const TodoContent = styled.p`
  color: #4e6466;
  flex: 1;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Emoji = styled.span`
  margin-right: 10px;
`;

const Status = styled.span`
  color: ${(props) => (props.checked ? "gray" : "#4e6466")};
  ${(props) =>
    props.checked &&
    css`
      text-decoration: line-through;
    `}
`;

const DeleteButton = styled.button`
  background-color: #c3e1e3;
  color: #4e6466;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 5px;
`;

const NoTodos = styled.p`
  color: #4e6466;
`;
