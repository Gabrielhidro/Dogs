import { Link } from "react-router-dom";
import { DogsLogo } from "../../shared/assets";
import { Container, Login, Logo, Navigation } from "./styles";

export default function Header() {
  return (
    <Container>
        <Navigation>
          <Link to="/">
            <Logo src={DogsLogo} alt="logo" />
          </Link>
          <Link to="/login">
            <Login>Login</Login>
          </Link>
        </Navigation>
    </Container>
  )
}
