import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import JoinPage from "./pages/JoinPage";
import PostPage from "./pages/PostPage";
import EachPostPage from "./pages/EachPostPage";
import AmendPostPage from "./pages/AmendPostPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/each-post" element={<EachPostPage />} />
          <Route path="/amend-post" element={<AmendPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
