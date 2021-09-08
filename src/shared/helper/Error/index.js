import { Erro } from "./styles";

export default function Error({error}){

  if(!error) return null;

  return (
    <Erro>{error}</Erro>
  )
}