import styled from "styled-components";
export default function TodoList() {
  return (
    <ListWrap>
      <p>투두리스트 보여주기</p>
    </ListWrap>
  );
}
const ListWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;

  background: #fff;
  width: 1180px;
  height: 300px;
  margin-top: 25px;
`;
