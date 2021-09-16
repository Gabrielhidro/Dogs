import styled from "styled-components";
import { ContainerModel, TitleModel } from "../../../../shared/styles/GlobalStyles";

export const Container = styled.header`
  ${ContainerModel}

  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  mask-border: 2rem;
  position: relative;
`

export const Title = styled.h1`
  ${TitleModel}


`