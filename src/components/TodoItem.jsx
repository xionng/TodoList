import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import emojiAdd from "../assets/img/emojiAddpng.png";
const TodoItem = ({
  todos,
  onDeleteTodo,
  onCompleteTodo,
  onUpdateTodo,
  onAddEmoji,
}) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(null);
  const emojiPickerRef = useRef();

  // 이모지 선택기 외부를 클릭했을때 선택 창 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // 수정하기
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
  const handleSaveEdit = (todo_id) => {
    onUpdateTodo(todo_id, { content: editContent });
    handleCancelEdit();
  };
  // 할 일 완료(체크박스)
  const handleComplete = (todo) => {
    onCompleteTodo(todo.todo_id, !todo.is_checked);
  };
  // 이모지 선택기 표시
  const handleShowEmojiPicker = (todo_id) => {
    setShowEmojiPicker(todo_id);
  };
  // 이모지 선택
  const handleSelectEmoji = (todo_id, emoji) => {
    onAddEmoji(todo_id, emoji);
    setShowEmojiPicker(null);
  };

  return (
    <TodoList>
      {Array.isArray(todos) && todos.length > 0 ? ( // 배열이 비어있지 않다면 todo를 map 함수로 반복하여 렌더링
        todos.map((todo) => (
          <TodoItemWrapper key={todo.todo_id}>
            {editTodoId === todo.todo_id ? ( // editTodoId와 현재 할 일의 todo_id가 같다면
              // 수정 모드
              <EditSection>
                <EditInput
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <EditBtn onClick={() => handleSaveEdit(todo.todo_id)}>
                  완료
                </EditBtn>
                <CancelBtn onClick={handleCancelEdit}>취소</CancelBtn>
              </EditSection>
            ) : (
              // 일반 모드
              <DisplaySection>
                <Checkbox
                  type="checkbox"
                  checked={todo.is_checked}
                  onChange={() => handleComplete(todo)}
                />
                <TodoContent>{todo.content}</TodoContent>
                <Emoji>{todo.emoji}</Emoji>
                <EmojiBtnWrapper>
                  <EmojiBtn onClick={() => handleShowEmojiPicker(todo.todo_id)}>
                    <EmojiAdd src={emojiAdd} alt="이모지 추가" />
                  </EmojiBtn>
                  {showEmojiPicker === todo.todo_id && ( // 현재 할 일의 ID와 showEmojiPicker가 같다면
                    <EmojiPicker ref={emojiPickerRef}>
                      {["🌕", "🌖", "🌗", "🌘", "🌑"].map((emoji) => (
                        <EmojiOption
                          key={emoji}
                          onClick={() => handleSelectEmoji(todo.todo_id, emoji)}
                        >
                          {emoji}
                        </EmojiOption>
                      ))}
                    </EmojiPicker>
                  )}
                </EmojiBtnWrapper>
                <EditBtn onClick={() => handleEdit(todo)}>수정</EditBtn>
                <DeleteBtn onClick={() => onDeleteTodo(todo.todo_id)}>
                  삭제
                </DeleteBtn>
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

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo_id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      is_checked: PropTypes.bool.isRequired,
      emoji: PropTypes.string,
    })
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
  onAddEmoji: PropTypes.func.isRequired,
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
  height: 35px;
  background-color: #fff;
  color: #4e6466;
  margin-right: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const EditBtn = styled.button`
  background-color: #97b3b5;
  color: #f5fffe;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 5px;
`;

const CancelBtn = styled.button`
  background-color: #c3e1e3;
  color: #4e6466;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 5px;
`;

const DisplaySection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TodoContent = styled.p`
  color: #4e6466;
  flex: 1;
`;

const Emoji = styled.span`
  margin-left: 10px;
  font-size: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const DeleteBtn = styled.button`
  background-color: #c3e1e3;
  color: #4e6466;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 5px;
`;

const EmojiBtnWrapper = styled.div`
  position: relative;
`;

const EmojiBtn = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 5px;
`;

const EmojiPicker = styled.div`
  position: absolute;
  display: flex;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
  left: 50%;
  top: -100%;
  cursor: pointer;
  transform: translateX(-50%);
`;

const EmojiOption = styled.span`
  margin: 0 5px;
  font-size: 20px;
`;

const EmojiAdd = styled.img`
  width: 30px;
`;
const NoTodos = styled.p`
  color: #4e6466;
`;
