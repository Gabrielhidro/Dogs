import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { GlobalStyle } from "./shared/styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
