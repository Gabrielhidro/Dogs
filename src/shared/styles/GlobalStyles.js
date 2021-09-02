import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    padding-top: 4rem;

    color: #333;

    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;

    font-family: var(---type-first);
  }

  h1, h2, h3, h4, p {
    margin: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
  }

  a {
    text-decoration: none;
  }
`

export const ContainerModel = css`
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
`

export const GlobalContainer = styled.div`
  ${ContainerModel}
`