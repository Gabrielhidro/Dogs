import styled from "styled-components";
import { ContainerModel, TitleModel } from "../../../../shared/styles/GlobalStyles";

export const Container = styled.header`
  ${ContainerModel}

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  mask-border: 2rem;
  position: relative;
`

export const Title = styled.h1`
  ${TitleModel}


`