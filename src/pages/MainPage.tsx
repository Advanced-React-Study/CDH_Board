import { useRecoilState } from "recoil";
import { LoginState } from "../states/LoginState";

const MainPage = () => {
  const [isLogin, setIsLogin] = useRecoilState(LoginState);

  const logoutHandler = () => {
    setIsLogin(false);
    window.location.href = "/";
  };

  return (
    <>
      <div>MainPage</div>
      <button onClick={logoutHandler}>{isLogin ? "logout" : "login"}</button>
    </>
  );
};

export default MainPage;
