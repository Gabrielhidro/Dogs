import { Container, InputStyle, LabelStyle } from "./styles";

export default function Input (props) {
  return (
    <Container>
      <LabelStyle htmlFor={props.name}>{props.label}</LabelStyle>
      <InputStyle type={props.type} id={props.name} />
    </Container>
  );
}