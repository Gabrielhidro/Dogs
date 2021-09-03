import { Container } from "./styles";

export default function Input (props) {
  return (
    <Container>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type} id={props.name} />
    </Container>
  );
}