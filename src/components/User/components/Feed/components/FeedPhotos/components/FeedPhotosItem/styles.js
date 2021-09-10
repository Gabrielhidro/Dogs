import styled from "styled-components";
import {VisualImg} from '../../../../../../../../shared/assets/index'

export const Container = styled.li`
  display: grid;
  border-radius: .2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2){
    grid-column: 2/4;
    grid-row: span 2;
  }

  img {
    grid-area: 1/1;
  }

  span {
    background: rgba(0,0,0, .3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    grid-area: 1/1;
    display: flex;
    opacity: 0;

    &:hover {
      opacity: 1;
    }

    &::before {
      width: 16px;
      height: 10px;
      content: '';
      display: inline-block;
      margin-right: .25rem;
      background: url(${VisualImg}) no-repeat;
    }
  }

  @media(max-width: 40rem){

    &:nth-child(2){
      grid-column: initial;
      grid-row: initial;
    }
  }
`