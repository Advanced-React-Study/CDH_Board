import styled from "styled-components";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginState } from "../states/LoginState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const Container = styled.div`
  width: 550px;
  padding: 70px 60px;
  /* border: 1px solid black; */
`;

const LogInTitle = styled.div`
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: bold;
    color: gray;
  }
  margin-bottom: 100px;
`;

const InputContainer = styled.div`
  margin: 15px 0px;
  display: flex;
  flex-direction: column;

  & > label {
    width: 30px;
    margin-left: 20px;
  }
`;

const InputBox = styled.input`
  border: none;
  height: 40px;
  padding: 12px;
  margin: 20px 0px;
  width: 100%;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

const LogInButton = styled.button`
  border: none;
  width: 100%;
  margin-top: 60px;
  padding: 25px;
  border-radius: 5px;
  cursor: pointer;
`;

const JoinInButton = styled.button`
  border: none;
  width: 100%;
  margin-top: 15px;
  padding: 25px;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const setIsLoggin = useSetRecoilState(LoginState);

  const Login = async (id: string, pw: string) => {
    try {
      await axios.post(`http://13.124.149.255:3001/user/login`, {
        id: id,
        password: pw,
      });
      setIsLoggin(true);
      navigate("/main");
      // 새로고침 -> react에서는 navigate를 사용하는 것이 좋음
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

  return (
    <Main>
      <Container>
        <LogInTitle>
          <span>Login</span>
        </LogInTitle>
        <InputContainer>
          <InputBox
            type={"text"}
            placeholder="user name/email"
            onChange={(e) => {
              setUserID(e.target.value);
            }}
            required
          ></InputBox>
        </InputContainer>
        <InputContainer>
          <InputBox
            type={"password"}
            placeholder="password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            required
          ></InputBox>
        </InputContainer>
        <LogInButton
          onClick={() => {
            Login(userID, userPassword);
          }}
        >
          Log in
        </LogInButton>
        <JoinInButton
          onClick={() => {
            navigate("/join");
          }}
        >
          Join in
        </JoinInButton>
      </Container>
      {/* <Container></Container> */}
    </Main>
  );
};

export default LoginPage;
