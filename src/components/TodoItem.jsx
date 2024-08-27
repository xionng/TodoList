import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
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

  const handleEdit = (todo) => {
    setEditTodoId(todo.todo_id);
    setEditContent(todo.content);
  };

  const handleCancelEdit = () => {
    setEditTodoId(null);
    setEditContent("");
  };

  const handleSaveEdit = (todo_id) => {
    onUpdateTodo(todo_id, { content: editContent });
    handleCancelEdit();
  };

  const handleComplete = (todo) => {
    onCompleteTodo(todo.todo_id, !todo.is_checked);
  };

  const handleShowEmojiPicker = (todo_id) => {
    setShowEmojiPicker(todo_id);
  };

  const handleSelectEmoji = (todo_id, emoji) => {
    onAddEmoji(todo_id, emoji);
    setShowEmojiPicker(null);
  };

  return (
    <TodoList>
      {Array.isArray(todos) && todos.length > 0 ? (
        todos.map((todo, index) => (
          <Draggable
            key={todo.todo_id}
            draggableId={todo.todo_id.toString()}
            index={index}
          >
            {(provided) => (
              <TodoItemWrapper
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                {editTodoId === todo.todo_id ? (
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
                  <DisplaySection>
                    <Checkbox
                      type="checkbox"
                      checked={todo.is_checked}
                      onChange={() => handleComplete(todo)}
                    />
                    <TodoContent>{todo.content}</TodoContent>
                    <Emoji>{todo.emoji}</Emoji>
                    <EmojiBtnWrapper>
                      <EmojiBtn
                        onClick={() => handleShowEmojiPicker(todo.todo_id)}
                      >
                        <EmojiAdd src={emojiAdd} alt="이모지 추가" />
                      </EmojiBtn>
                      {showEmojiPicker === todo.todo_id && (
                        <EmojiPicker ref={emojiPickerRef}>
                          {["🌕", "🌖", "🌗", "🌘", "🌑"].map((emoji) => (
                            <EmojiOption
                              key={emoji}
                              onClick={() =>
                                handleSelectEmoji(todo.todo_id, emoji)
                              }
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
            )}
          </Draggable>
        ))
      ) : (
        <EmptyList>TODO LIST가 아직 없습니다.</EmptyList>
      )}
    </TodoList>
  );
};

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      todo_id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
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
  list-style: none;
  background-color: #fff;
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
const EmptyList = styled.div`
  text-align: center;
  color: #4e6466;
  margin-top: 20px;
`;
