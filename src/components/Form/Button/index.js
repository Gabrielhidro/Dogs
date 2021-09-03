import { ButtonStyle } from "./styles";

export default function Button ({type, children, ...props}) {
  return (
    <ButtonStyle {...props} type={type}>
      {children}
    </ButtonStyle>
  );
}