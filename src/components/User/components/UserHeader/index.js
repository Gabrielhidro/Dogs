import React from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "../UserHeaderNav";
import { Container, Title } from "./styles";

export default function UserHeader (){

  const [ title, setTitle ] = React.useState('')
  const location = useLocation();

  React.useEffect(() => {
    if(location.pathname === '/conta'){
      setTitle('Minha Conta')
    }
    if(location.pathname === '/conta/statistics'){
      setTitle('Estatísticas')
    }
    if(location.pathname === '/conta/posts'){
      setTitle('Adicionar Post')
    }
    
  }, [location])
  
  return (
    <Container>
      <Title>{title}</Title>
      <UserHeaderNav />
    </Container>
  )
}