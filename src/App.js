import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import PhotoProfile from "./components/Photo/PhotoProfile";
import User from "./components/User";
import { UserStorage } from "./context";
import ProtectedRouter from "./shared/helper/ProtectedRouter";
import { GlobalStyle } from "./shared/styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRouter path="conta/*" element={<User />} />
              <Route path="photo/:id" element={<PhotoProfile />} />
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
