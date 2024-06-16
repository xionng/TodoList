import { Wrap, GetWrap, ListGet, InputBtn } from "./common.js";

export default function TodoListGet() {
  return (
    <Wrap>
      <GetWrap>
        <ListGet type="text" placeholder="입력하세요" />
        <InputBtn>추가하기</InputBtn>
      </GetWrap>
    </Wrap>
  );
}
