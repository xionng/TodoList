import styled from "styled-components";
export default function TodoEdit() {
  return (
    <EditWrap>
      <p>투두리스트 추가,수정</p>
    </EditWrap>
  );
}
const EditWrap = styled.section`
  border-radius: 30px;
  border: 10px solid #c3e1e3;

  background: #fff;
  width: 780px;
  height: 300px;
`;
