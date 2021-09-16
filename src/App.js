import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import PhotoProfile from "./components/Photo/PhotoProfile";
import User from "./components/User";
import UserProfile from "./components/User/components/UserProfile";
import { UserStorage } from "./context";
import ProtectedRouter from "./shared/helper/ProtectedRouter";
import { GlobalStyle } from "./shared/styles/GlobalStyles";
import './shared/styles/App.css'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRouter path="conta/*" element={<User />} />
              <Route path="photo/:id" element={<PhotoProfile />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
