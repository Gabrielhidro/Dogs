import styled from "styled-components";
import { AnimateModel } from "../../../../shared/styles/GlobalStyles";

export const Container = styled.section`
  ${AnimateModel}

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  #img {
    margin-bottom: 1rem;
  }
`

export const ImagePreview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`