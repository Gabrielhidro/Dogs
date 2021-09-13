import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, .4);
  top: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px);

  @media(max-width: 40rem){
    padding: 2rem calc(2rem + 15px);
  }
`