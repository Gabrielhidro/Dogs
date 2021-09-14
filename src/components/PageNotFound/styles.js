import styled from "styled-components";
import { ContainerModel, TitleModel } from "../../shared/styles/GlobalStyles";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 128px);

  div {
    text-align: center;
  }

  p {
    font-weight: bold;
  }
`

export const Title = styled.h1`
  ${TitleModel}
`