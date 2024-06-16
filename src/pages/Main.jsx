import Calendar from "../components/Calendar";
import TodoEdit from "../components/TodoEdit";
import TodoList from "../components/TodoList";
import styled from "styled-components";

// import styled from "styled-components";
export default function Main() {
  return (
    <div>
      <MainTop>
        <Calendar />
        <TodoEdit />
      </MainTop>

      <TodoList />
    </div>
  );
}
const MainTop = styled.section`
  display: flex;
`;
