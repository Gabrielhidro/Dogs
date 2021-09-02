import { Link } from "react-router-dom";
import { GlobalContainer } from "../../shared/styles/GlobalStyles";
import { DogsLogo } from "../../shared/assets";

export default function Header() {
  return (
    <GlobalContainer>
      <nav>
        <Link to="/">
          <img src={DogsLogo} alt="logo" />
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </GlobalContainer>
  )
}
