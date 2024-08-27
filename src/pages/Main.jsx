import React, { useState, useEffect } from "react";
import CalendarSection from "../components/CalendarSection";
import TodoItem from "../components/TodoItem";
import TodoListGet from "../components/TodoListGet";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import axios from "axios";

const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [droppableIds, setDroppableIds] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetchTodos(userId, selectedDate);
    updateDroppableIds();
  }, [selectedDate]);

  // 투두 리스트 조회
  const fetchTodos = async (user_id, date) => {
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();
    try {
      const response = await axios.get(
        `${BASE_URL}/api/todos/${user_id}?month=${month}&day=${day}`
      );
      const data = Array.isArray(response.data) ? response.data : [];
      setTodoList(data);
    } catch (error) {
      console.error("투두 리스트를 불러오는데 실패했습니다", error);
      setTodoList([]); // 에러 발생 시 빈 배열로 설정
    }
  };

  // 투두 추가
  const handleAddTodo = async (todo) => {
    try {
      await axios.post(`${BASE_URL}/api/todos/${userId}`, {
        date: todo.date,
        content: todo.content,
      });
      fetchTodos(userId, selectedDate);
    } catch (error) {
      console.error("투두 추가에 실패했습니다", error);
    }
  };

  // 투두 수정
  const handleUpdateTodo = async (todo_id, updatedTodo) => {
    try {
      await axios.patch(`${BASE_URL}/api/todos/${userId}/${todo_id}`, {
        content: updatedTodo.content,
        date: updatedTodo.date,
      });
      fetchTodos(userId, selectedDate); // 수정 후 리스트 갱신
    } catch (error) {
      console.error("투두 수정에 실패했습니다", error);
    }
  };

  // 투두 삭제
  const handleDeleteTodo = async (plan_id) => {
    try {
      await axios.delete(`${BASE_URL}/api/todos/${userId}/${plan_id}`);
      fetchTodos(userId, selectedDate); // 삭제 후 리스트 갱신
    } catch (error) {
      console.error("투두 삭제에 실패했습니다", error);
    }
  };

  // 투두 완료 체크
  const handleCompleteTodo = async (todo_id, is_checked) => {
    try {
      await axios.patch(`${BASE_URL}/api/todos/${userId}/${todo_id}/check`, {
        is_checked,
      });
      fetchTodos(userId, selectedDate); // 완료 체크 후 리스트 갱신
    } catch (error) {
      console.error("투두 완료 체크에 실패했습니다", error);
    }
  };

  // 이모지 추가
  const handleAddEmoji = async (todo_id, emoji) => {
    try {
      await axios.patch(`${BASE_URL}/api/todos/${userId}/${todo_id}/reviews`, {
        emoji: emoji,
      });
      fetchTodos(userId, selectedDate); // 이모지 등록 후 리스트 갱신
    } catch (error) {
      console.error("이모지 추가에 실패했습니다", error);
    }
  };

  // 날짜 변경 처리
  const updateDroppableIds = () => {
    const newDroppableIds = [];
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      newDroppableIds.push(`droppable-date-${day}`);
    }
    setDroppableIds(newDroppableIds);
  };

  const handleDateChange = (date, todoId = null) => {
    if (todoId) {
      handleUpdateTodo(todoId, { date: date.toISOString().split("T")[0] });
    }
    setSelectedDate(date);
  };

  const onDragEnd = (result) => {
    const { destination, draggableId } = result;

    if (!destination) return;

    const dateString = destination.droppableId.replace("droppable-date-", "");
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      dateString
    );
    handleUpdateTodo(draggableId, {
      date: newDate.toISOString().split("T")[0],
    });
    fetchTodos(userId, newDate);
  };

  return (
    <MainWrap>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainTop>
          <CalendarSection
            onDateChange={handleDateChange}
            selectedDate={selectedDate}
          />
          <EditWrap>
            <TodoListGet date={selectedDate} onAddTodo={handleAddTodo} />
          </EditWrap>
        </MainTop>

        <Droppable droppableId={`droppable-date-${selectedDate.getDate()}`}>
          {(provided) => (
            <ListWrap ref={provided.innerRef} {...provided.droppableProps}>
              <Title>TODO.</Title>
              <TodoItem
                todos={todoList}
                onUpdateTodo={handleUpdateTodo}
                onDeleteTodo={handleDeleteTodo}
                onCompleteTodo={handleCompleteTodo}
                onAddEmoji={handleAddEmoji}
              />
              {provided.placeholder}
            </ListWrap>
          )}
        </Droppable>

        {droppableIds.map((id) => (
          <Droppable key={id} droppableId={id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ display: "none" }}
              >
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.section`
  width: 1200px;
  padding: 60px 155px 60px 155px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;
  background: #fff;
  width: 1180px;
  min-height: 340px;
  overflow: hidden;
  height: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Title = styled.h1`
  color: #4e6466;
  font-size: 30px;
  font-weight: 700;
  width: 1100px;
  border-bottom: #97b3b5 solid 3px;
  padding-bottom: 10px;
  margin-top: 10px;
`;
