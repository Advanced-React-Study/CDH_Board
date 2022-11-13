import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div``;

const PreviousButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
`;

const TitleBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  margin: 10px;
  border-bottom: 1px solid black;
`;

const ContentBox = styled.div`
  padding: 10px 30px;
`;

const AmendButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const EachPostPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

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

  return (
    <>
      <Header>
        <h1>CDH_BOARD</h1>
        <PreviousButton onClick={() => navigate("/main")}>
          뒤로가기
        </PreviousButton>
      </Header>
      <Container>
        <AmendButton
          onClick={() =>
            navigate("/amend-post", {
              state: {
                code: state.code,
              },
            })
          }
        >
          수정하기
        </AmendButton>
        <TitleBox>{title}</TitleBox>
        <ContentBox>{content}</ContentBox>
      </Container>
    </>
  );
};

export default EachPostPage;
