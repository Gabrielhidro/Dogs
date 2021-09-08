import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import { DogsLogo } from "../../shared/assets";
import { Container, Login, Logo, Navigation } from "./styles";

export default function Header() {

  const {data, userLogout} = React.useContext(UserContext)

  return (
    <Container>
        <Navigation>
          <Link to="/">
            <Logo src={DogsLogo} alt="logo" />
          </Link>
          {data ? (
            <Link to="/conta">
              <Login>{data.nome}</Login>
            </Link>
            ):(
              <Link to="/login">
                <Login>Login</Login>
              </Link>
            )
          }
          <button onClick={userLogout}>sair</button>
        </Navigation>
    </Container>
  )
}
