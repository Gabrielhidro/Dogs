import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const InputStyle = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: .2s;

  &:focus,
  &:hover {
    outline: none;
    border-color: #fb1;
    background: white;
    border-color: 0 0 0 3px #fea;
  }
`

export const LabelStyle = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`