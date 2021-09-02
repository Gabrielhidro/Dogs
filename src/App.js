import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
