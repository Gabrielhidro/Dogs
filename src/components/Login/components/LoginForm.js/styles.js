import styled from "styled-components";
import { AnimateModel, titleModel } from "../../../../shared/styles/GlobalStyles";
import { Link as DefaultLink } from 'react-router-dom';

export const Container = styled.section`
  ${AnimateModel}
`

export const Title = styled.h1`
  ${titleModel}
`

export const Form = styled.form`
  margin-bottom: 2rem;
`

export const LinkForgot = styled(DefaultLink)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: currentColor;
    display: block;
  }
`;

export const RegisterContainer = styled.div`
  margin-top: 4rem;

  p {
    margin: 2rem 0;
  }
`


export const LinkRegister = styled(DefaultLink)`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: .2s;
  min-width: 8rem;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`