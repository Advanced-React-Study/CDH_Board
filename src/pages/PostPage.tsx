import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PreviousButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
`;

const Container = styled.div``;

const PostButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
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

const PostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const postOne = async (titleP: string, contentP: string) => {
    try {
      await axios.post(`http://13.124.149.255:3001/board`, {
        title: titleP,
        content: contentP,
      });
      alert("작성이 완료되었습니다");
      navigate("/main");
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
  return (
    <>
      <Header>
        <h1>New Post</h1>
        <PreviousButton onClick={() => navigate("/main")}>
          뒤로가기
        </PreviousButton>
      </Header>
      <Container>
        <PostButton onClick={() => postOne(title, content)}>
          작성완료
        </PostButton>
        <div style={{ borderBottom: "1px solid black", marginBottom: "20px" }}>
          <TitleBox
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)}
          ></TitleBox>
        </div>
        <div style={{ borderBottom: "1px solid black" }}>
          <ContentBox
            placeholder="내용"
            onChange={(e) => setContent(e.target.value)}
          ></ContentBox>
        </div>
      </Container>
    </>
  );
};

export default PostPage;
