import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import {
  Wrapper,
  Logo,
  Form,
  Input,
  Inputs,
  LoginWrap,
  Spring,
  Button,
  SpringSection,
} from "../components/common.js";
import { Link } from "react-router-dom";
import spring from "../assets/img/spring.png";

export default function SignUp() {
  return (
    <>
      <LoginWrap>
        <Wrapper>
          <Logo img src={logo} alt="로고이미지" />
          <Form>
            <Inputs>
              <Input placeholder="아이디를 입력하세요" />
              <Input placeholder="비밀번호를 입력하세요" type="password" />
            </Inputs>
            <Button>회원가입하기</Button>
          </Form>
          <CustomLink to="/">로그인 하러가기</CustomLink>
        </Wrapper>
        <SpringSection>
          <Spring img src={spring} alt="스프링" />

          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
          <Spring img src={spring} alt="스프링" />
        </SpringSection>
      </LoginWrap>
    </>
  );
}

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: #4e6466;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  &:visited {
    color: #4e6466;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
`;
