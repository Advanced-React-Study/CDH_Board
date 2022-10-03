import styled from "styled-components";
import { useState } from "react";

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
  const [newID, setNewID] = useState<string>("");
  const [newPW, setNewPW] = useState<string>("");
  return (
    <Main>
      <Container>
        <JoinInTitle>
          <span>Join In</span>
        </JoinInTitle>
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
            type={"text"}
            placeholder="new Password"
            onChange={(e) => {
              setNewPW(e.target.value);
            }}
            required
          ></InputBox>
        </InputContainer>
        <JoinInButton>Join in</JoinInButton>
      </Container>
    </Main>
  );
};

export default JoinPage;
