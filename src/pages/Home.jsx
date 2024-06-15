import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { Wrapper, Logo, Form, Input, Inputs } from "../components/common.js";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Wrapper>
      <Logo img src={logo} alt="로고이미지" />
      <Form>
        <Inputs>
          <Input placeholder="아이디를 입력하세요" />
          <Input placeholder="비밀번호를 입력하세요" type="password" />
        </Inputs>
        <Button>로그인하기</Button>
      </Form>
      <CustomLink to="/signup">회원가입 하러가기</CustomLink>
    </Wrapper>
  );
}

const Button = styled.button`
  width: 250px;
  height: 50px;
  background-color: #c3e1e3;
  color: #4e6466;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: #4e6466;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  &:visited {
    color: #4e6466;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
`;
