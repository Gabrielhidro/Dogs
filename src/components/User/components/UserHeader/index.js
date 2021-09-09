import React from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "../UserHeaderNav";
import { Container, Title } from "./styles";

export default function UserHeader (){

  const [ title, setTitle ] = React.useState('')
  const location = useLocation();

  React.useEffect(() => {
    if(location.pathname === '/conta'){
      setTitle('Feed')
    }
    if(location.pathname === '/conta/statistics'){
      setTitle('Estatísticas')
    }
    if(location.pathname === '/conta/posts'){
      setTitle('Adicionar post')
    }
    
  }, [location])
  
  console.log(location);
  return (
    <Container>
      <Title>{title}</Title>
      <UserHeaderNav />
    </Container>
  )
}