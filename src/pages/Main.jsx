import React, { useState, useEffect } from "react";
import Calendar from "../components/CalendarSection";
import TodoItem from "../components/TodoItem";
import TodoListGet from "../components/TodoListGet";
import styled from "styled-components";
import axios from "axios";

const Main = () => {
  const [todoList, setTodoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const userId = localStorage.getItem("user_id");
  useEffect(() => {
    fetchTodos(userId, selectedDate); // 초기 로딩 시 해당 사용자의 투두 리스트를 불러옵니다.
  }, [selectedDate]);

  // 투두 리스트 조회
  const fetchTodos = async (user_id, date) => {
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();
    try {
      const response = await axios.get(
        `${BASE_URL}/api/todos/${user_id}?month=${month}&day=${day}`,
        {
          params: {
            month: month,
            day: day,
          },
        }
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
  const handleCompleteTodo = async (todo_id) => {
    try {
      await axios.patch(`${BASE_URL}/api/todos/${userId}/${todo_id}/check`);
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
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MainWrap>
      <MainTop>
        <Calendar onDateChange={handleDateChange} />
        <EditWrap>
          <TodoListGet date={selectedDate} onAddTodo={handleAddTodo} />
        </EditWrap>
      </MainTop>
      <ListWrap>
        <Title>TODO.</Title>
        <TodoItem
          todos={todoList} // todoList를 todos props로 전달
          onUpdateTodo={handleUpdateTodo}
          onDeleteTodo={handleDeleteTodo}
          onCompleteTodo={handleCompleteTodo}
          onAddEmoji={handleAddEmoji}
        />
      </ListWrap>
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
  height: 340px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
