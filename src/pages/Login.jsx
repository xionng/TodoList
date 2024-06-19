// 로그인 페이지
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
import { useState } from "react";

export default function Home() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const saveUserId = (e) => {
    setInputId(e.target.value);
  };
  const saveUserPw = (e) => {
    setInputPw(e.target.value);
  };
  const gotoMain = () => {
    window.location.href = "/main";
  };
  return (
    <>
      <LoginWrap>
        <Wrapper>
          <Logo img src={logo} alt="로고이미지" />
          <Form>
            <Inputs>
              <Input
                name="id"
                value={inputId}
                onChange={(e) => {
                  saveUserId(e);
                }}
                placeholder="아이디를 입력하세요"
              />
              <Input
                name="pw"
                value={inputPw}
                onChange={(e) => {
                  saveUserPw(e);
                }}
                placeholder="비밀번호를 입력하세요"
                type="password"
              />
            </Inputs>

            {inputId.length > 1 && inputPw.length > 1 ? (
              <Button onClick={gotoMain} disabled={false}>
                로그인하기
              </Button>
            ) : (
              <Button disabled={true}>로그인하기</Button>
            )}
          </Form>
          <CustomLink to="/signup">회원가입 하러가기</CustomLink>
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
