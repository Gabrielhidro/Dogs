import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../../context";
import { Container } from "./styles";
import {
  AdicionarImg,
  FeedImg,
  EstatisticasImg,
  SairImg,
} from "../../../../shared/assets/index.js";

export default function UserHeaderNav() {

  const [ mobile, setMobile ] = React.useState(null)
  const { userLogout } = React.useContext(UserContext);

  return (
    <Container>
      <NavLink to="/conta" end>
        <img src={FeedImg} alt="Feed" />
        {mobile && 'Minhas fotos'}
      </NavLink>

      <NavLink to="/conta/statistics">
        <img src={EstatisticasImg} alt="Estatisticas" />
        {mobile && 'Estatísticas'}
      </NavLink>

      <NavLink to="/conta/posts">
        <img src={AdicionarImg} alt="Adicionar" />
        {mobile && 'Adicionar'}
      </NavLink>
      <button onClick={userLogout}>
        <img src={SairImg} alt="Sair" />
        {mobile && 'Sair'}
      </button>
    </Container>
  );
}
