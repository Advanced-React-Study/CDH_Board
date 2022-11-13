import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
`;

const JoinInTitle = styled.div`
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

const JoinInButton = styled.button`
  border: none;
  width: 100%;
  margin-top: 15px;
  padding: 25px;
  border-radius: 5px;
  cursor: pointer;
`;

const JoinPage = () => {
  const navigate = useNavigate();
  const [newID, setNewID] = useState<string>("");
  const [newPW, setNewPW] = useState<string>("");
  const [newName, setNewName] = useState<string>("");

  const signIn = async (id: string, pw: string, name: string) => {
    try {
      await axios.post(`http://13.124.149.255:3001/user/register`, {
        id: id,
        password: pw,
        name: name,
      });
      alert("회원가입 성공");
      navigate("/");
    } catch (e: any) {
      alert(JSON.stringify(e.response.data.message));
    }
  };
  return (
    <Main>
      <Container>
        <JoinInTitle>
          <span>Join In</span>
        </JoinInTitle>
        <InputContainer>
          <InputBox
            type={"text"}
            placeholder="your Name"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
            required
          ></InputBox>
        </InputContainer>
        <InputContainer>
          <InputBox
            type={"text"}
            placeholder="new ID"
            onChange={(e) => {
              setNewID(e.target.value);
            }}
            required
          ></InputBox>
        </InputContainer>
        <InputContainer>
          <InputBox
            type={"password"}
            placeholder="new Password"
            onChange={(e) => {
              setNewPW(e.target.value);
            }}
            required
          ></InputBox>
        </InputContainer>
        <JoinInButton
          onClick={() => {
            signIn(newID, newPW, newName);
          }}
        >
          Join in
        </JoinInButton>
      </Container>
    </Main>
  );
};

export default JoinPage;
