import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Postpage from "./pages/Postpage";
import { Login } from "./components/function/Login";
import CreatePostpage from "./pages/CreatePostpage";
import MyPostPage from "./pages/MyPostPage";
import BookmarkPage from "./pages/BookmarkPage";
function App() {
  const { nowLogin, isLogin, logout ,getName } = Login();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-post" element={<MyPostPage 
              isLogin={isLogin}
              nowLogin={nowLogin}
              Logout={logout}
              getName={getName}/>}/>
        <Route path="/bookmark" element={<BookmarkPage 
              isLogin={isLogin}
              nowLogin={nowLogin}
              Logout={logout}
              getName={getName}/>}/>
        <Route
          path="/Create-Post"
          element={
            <CreatePostpage
              isLogin={isLogin}
              nowLogin={nowLogin}
              Logout={logout}
              getName={getName}
            />
          }
        />
        <Route
          path="/Post/:PID"
          element={
            <Postpage isLogin={isLogin} nowLogin={nowLogin} Logout={logout} getName={getName} />
          }
        />

        <Route
          path="/"
          element={
            <Homepage isLogin={isLogin} nowLogin={nowLogin} Logout={logout}  getName={getName}/>
          }
        >
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
