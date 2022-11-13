import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { LoginState } from "../states/LoginState";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div``;

const LogoutButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
`;

const NewPostButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 20px;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const BoardLine = styled.button`
  width: 100vw;
  height: 20px;
  padding: 20px;
  border: none;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const UpdateTime = styled.div``;

const MainPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(LoginState);
  const [board, setBoard] = useState<Object[]>([]);

  const logoutHandler = () => {
    setIsLogin(false);
    navigate("/");
  };

  useEffect(() => {
    try {
      const getWholeBoard = async () => {
        const response = await axios.get(`http://13.124.149.255:3001/board`);
        setBoard(response.data.boards);
        console.log(response.data.boards);
      };
      getWholeBoard();
    } catch (e: any) {
      alert(e.response.data.message);
    }
  }, []);

  const getOnePost = (id: string) => {
    navigate("/each-post", {
      state: {
        code: id,
      },
    });
  };

  return (
    <>
      <Header>
        <h1>CDH_BOARD</h1>
        <LogoutButton onClick={logoutHandler}>
          {isLogin ? "logout" : "login"}
        </LogoutButton>
      </Header>
      <Container>
        <NewPostButton onClick={() => navigate("/post")}>
          새 게시글
        </NewPostButton>
        {board.map((list: any) => (
          <BoardLine onClick={() => getOnePost(list.id)}>
            {list.title}
            <UpdateTime>{list.updatedAt}</UpdateTime>
          </BoardLine>
        ))}
      </Container>
    </>
  );
};

export default MainPage;
