import styled from "styled-components";
export default function TodoList() {
  return (
    <ListWrap>
      <Title>TODO.</Title>
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
