import styled from "styled-components";
import { LoginImg } from "../../shared/assets";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url(${LoginImg}) no-repeat center center;
    background-size: cover;
  }

  @media(max-width: 40rem){
    grid-template-columns: 1fr;

    &::before{
      display: none;
    }
  }
`

export const Forms = styled.div`
  max-width: 30rem;
  padding: 2rem;
`