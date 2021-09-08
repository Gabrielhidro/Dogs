import { createGlobalStyle, css } from "styled-components";

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

export const titleModel = css`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;

  &::after{
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }
`

export const AnimateModel = css`
  opacity: 0;
  transform: translateX(-40px);
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`