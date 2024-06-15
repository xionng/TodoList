import styled from "styled-components";
import logo from "../assets/img/logo.png";
export default function Join() {
  return (
    <div>
      <JoinWrap>
        <Logo img src={logo} alt="로고이미지" />

        {/* 아아디, 비번 입력 */}
        <InputWrap>
          <JoinInput placeholder="아이디를 입력하세요" />
          <JoinInput placeholder="비밀번호를 입력하세요" />
        </InputWrap>
        {/* 로그인 버튼 */}
        <JoinBtn>회원가입</JoinBtn>
        {/* 로그인으로 넘어가기 */}
        <LoginMove>로그인 하러가기</LoginMove>
      </JoinWrap>
    </div>
  );
}
const JoinWrap = styled.section`
  background-color: white;
  padding: 50px;
  border-radius: 20px;
  border: 10px solid #c3e1e3;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;
const InputWrap = styled.section`
  display: flex;
  flex-direction: column;
`;
const JoinInput = styled.input`
  width: 250px;
  height: 50px;
  color: #4e6466;
  background-color: white;

  text-align: center;
  font-size: 20px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
`;
const JoinBtn = styled.button`
  width: 250px;
  height: 50px;
  background-color: #c3e1e3;
  color: #4e6466;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
const LoginMove = styled.p`
  color: #4e6466;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;
