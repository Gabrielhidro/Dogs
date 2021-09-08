import styled from "styled-components";
import { UserImg } from "../../shared/assets";
import { ContainerModel } from "../../shared/styles/GlobalStyles";

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0;
`

export const Navigation = styled.nav`
  ${ContainerModel}

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`

export const Logo = styled.img`
  padding: 0.5rem 0;
`

export const Login = styled.p`
  color: #333;

  &::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${UserImg}) no-repeat center center; 
    margin-left: 0.5rem;
    position: relative;
  }
`
