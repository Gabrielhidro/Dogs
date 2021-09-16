import { DogsFooterImg } from "../../shared/assets";
import { Container } from "./styles";

export default function Footer(){
    return (
        <Container>
            <img src={DogsFooterImg} alt="" />
            <p>Dogs. Alguns direitos reservados</p>
        </Container>
    )
} 