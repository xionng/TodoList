import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import spring from "../assets/img/spring.png";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (event) => {
    // event.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/api/users/register`, {
        username,
        password,
      });

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginWrap>
        <Wrapper>
          <Logo src={logo} alt="로고이미지" />
          <Form onSubmit={handleSubmit}>
            <Inputs>
              <Input
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="아이디를 입력하세요"
              />
              <Input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="비밀번호를 입력하세요"
                type="password"
              />
            </Inputs>
            <Button type="submit">회원가입하기</Button>
          </Form>
          <CustomLink to="/">로그인 하러가기</CustomLink>
        </Wrapper>
        <SpringSection>
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
          <Spring src={spring} alt="스프링" />
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
