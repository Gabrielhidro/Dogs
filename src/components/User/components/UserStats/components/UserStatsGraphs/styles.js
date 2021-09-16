import styled from "styled-components";
import { AnimateModel } from "../../../../../../shared/styles/GlobalStyles";

export const Graph = styled.section`

  ${AnimateModel}

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const GraphItem = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`

export const Total = styled(GraphItem)`
  grid-column: 1 /3;
  padding: 2rem;
  font-size: 2rem;
`