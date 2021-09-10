import styled from "styled-components";
import { AnimateModel } from "../../../../../../shared/styles/GlobalStyles";

export const Container = styled.ul`
  ${AnimateModel}

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media(max-width: 40rem){
    grid-template-columns: repeat(2, 1fr);
  }
`