import Calendar from "../components/Calendar";
import TodoListShow from "../components/TodoListShow";
import TodoListGet from "../components/TodoListGet";
import styled from "styled-components";

export default function Main() {
  return (
    <div>
      <MainTop>
        <Calendar />
        <EditWrap>
          <TodoListGet />
        </EditWrap>
      </MainTop>
      <TodoListShow />
    </div>
  );
}

const MainTop = styled.section`
  display: flex;
`;

const EditWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;
  background: #fff;
  width: 780px;
  height: 300px;
`;
