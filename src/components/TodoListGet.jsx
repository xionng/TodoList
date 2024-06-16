import styled from "styled-components";
function TodoListGet() {
  return (
    <Wrap>
      <GetWrap>
        <ListGet type="text" placeholder="TODO LIST를 입력하세요" />
        <InputBtn>추가하기</InputBtn>
      </GetWrap>
    </Wrap>
  );
}

export default TodoListGet;

const Wrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
const GetWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ListGet = styled.input`
  width: 600px;
  height: 150px;
  border-radius: 20px;
  border: 3px solid #c3e1e3;
  background: #fff;
  color: #4e6466;

  margin-bottom: 20px;
`;

const InputBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: #97b3b5;

  color: #f5fffe;

  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
