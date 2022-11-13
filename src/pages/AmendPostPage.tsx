import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompleteButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
`;

const TitleBox = styled.input`
  width: 90vw;
  border: none;
  border-bottom: 1px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  outline: none;
`;

const ContentBox = styled.input`
  width: 90vw;
  border: none;
  padding: 10px;
  outline: none;
`;

const AmendPostPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    try {
      const getEachPost = async () => {
        const response = await axios.get(
          `http://13.124.149.255:3001/board/` + state.code
        );
        setTitle(response.data.board.title);
        setContent(response.data.board.content);
      };
      getEachPost();
    } catch (e: any) {
      alert(e.response.data.message);
    }
  }, []);

  const AmendPost = async () => {
    try {
      await axios.put(`http://13.124.149.255:3001/board/${state.code}`, {
        title: title,
        content: content,
      });
      console.log(title);
      console.log(content);
      alert("수정되었습니다");
      navigate("/main");
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <Header>
        <h1>CDH_BOARD</h1>
        <CompleteButton onClick={AmendPost}>수정완료</CompleteButton>
      </Header>
      <Container>
        <div style={{ borderBottom: "1px solid black", marginBottom: "20px" }}>
          <TitleBox
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TitleBox>
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <ContentBox
            defaultValue={content}
            onChange={(e) => setContent(e.target.value)}
          ></ContentBox>
        </div>
      </Container>
    </>
  );
};

export default AmendPostPage;
