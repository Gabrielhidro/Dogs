import { Title, Container } from "./styles";

export default function PageNotFound(){
  return (
    <Container>
      <div>
        <Title>Error: 404</Title>
        <p>Página não encontrada</p>
      </div>
    </Container>
  )
}