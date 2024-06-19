import { styled } from "styled-components";

// 로그인, 회원가입
export const Wrapper = styled.div`
  padding: 50px;
  border-radius: 20px;
  border: 10px solid #c3e1e3;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  top: 115px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-right: 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 50px;
  color: #4e6466;
  background-color: #efefef;

  text-align: center;
  font-size: 20px;
  font-weight: 400;
  border: none;
  border-radius: 10px;

  &::placeholder {
    color: darkgray;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Logo = styled.img`
  width: 200px;
  margin-top: 50px;
  margin-bottom: 40px;
`;
export const LoginWrap = styled.section`
  padding-left: 260px;
  padding-right: 260px;
  display: flex;
  justify-content: center;
  width: 1000px;
`;
export const Button = styled.button`
  width: 250px;
  height: 50px;
  background-color: #c3e1e3;
  color: #4e6466;

  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const SpringSection = styled.div`
  position: absolute;
  top: 95px;
  width: 430px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
`;
export const Spring = styled.img`
  width: 25px;
`;
// 투두리스트 입력
export const Wrap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
export const GetWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
`;

export const ListGet = styled.input`
  width: 600px;
  height: 150px;
  border-radius: 20px;
  border: 3px solid #c3e1e3;
  background: #fff;
  color: #4e6466;

  margin-bottom: 20px;
`;

export const InputBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: #97b3b5;

  color: #f5fffe;

  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
