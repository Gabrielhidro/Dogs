import { Container, InputStyle, LabelStyle } from "./styles";
import { Erro } from "../../../shared/helper/Error/styles";

export default function Input({
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
  error,
}) {
  return (
    <Container>
      <LabelStyle htmlFor={name}>{label}</LabelStyle>
      <InputStyle type={type} id={name} onChange={onChange} value={value} onBlur={onBlur} />

      {error && <Erro>{error}</Erro>}
    </Container>
  );
}
