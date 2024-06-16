import styled from "styled-components";

export default function TodoListShow() {
  return (
    <ListWrap>
      <Title>TODO.</Title>
      <TodoListSection>
        <TodoItem>
          <TodoCheck type="checkbox" />
          <Todocontent>투두 내용</Todocontent>
        </TodoItem>
        <TodoBtn>
          <EditBtn>수정</EditBtn>
          <DelBtn>삭제</DelBtn>
        </TodoBtn>
      </TodoListSection>
    </ListWrap>
  );
}

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
  /* background-color: #000; */
  font-size: 30px;
  font-weight: 700;

  width: 1100px;
  border-bottom: #97b3b5 solid 3px;
  padding-bottom: 10px;
  margin-top: 10px;
`;

const TodoListSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  border-bottom: #97b3b5 solid 1px;
  padding: 0px 10px 0px 10px;
  /* background-color: aqua; */
`;
const TodoItem = styled.section`
  display: flex;
`;
const TodoCheck = styled.input`
  background-color: aqua;
  margin-right: 10px;
`;
const Todocontent = styled.p`
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

  font-size: 12px;
  width: 55px;
  height: 40px;
`;
const DelBtn = styled.button`
  border-radius: 10px;
  background: #c3e1e3;
  color: #4e6466;
  font-size: 12px;
  width: 55px;
  height: 40px;
`;
