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
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
