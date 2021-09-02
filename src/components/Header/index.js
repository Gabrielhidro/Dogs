import { Link } from "react-router-dom";
import { GlobalContainer } from "../../shared/styles/GlobalStyles";

export default function Header() {
  return (
    <GlobalContainer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </GlobalContainer>
  )
}
