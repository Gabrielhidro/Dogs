import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../../../context";
import { Container, MobileButton, MobileContainer } from "./styles";
import {
  AdicionarImg,
  FeedImg,
  EstatisticasImg,
  SairImg,
} from "../../../../shared/assets/index.js";
import useMedia from "../../../../shared/hooks/useMedia";

export default function UserHeaderNav() {
  const [isMobileMenuActive, setIsMobileMenuActive] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");

  const {pathname} = useLocation()

  React.useEffect(() => {
    setIsMobileMenuActive(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <MobileButton
          aria-label="Menu"
          onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
          isActive={isMobileMenuActive}
        ></MobileButton>
      )}

      {!mobile &&
        <Container>
          <NavLink to="/conta" end>
            <img src={FeedImg} alt="Feed" />
            {mobile && "Minhas fotos"}
          </NavLink>

          <NavLink to="/conta/statistics">
            <img src={EstatisticasImg} alt="Estatisticas" />
            {mobile && "Estatísticas"}
          </NavLink>

          <NavLink to="/conta/posts">
            <img src={AdicionarImg} alt="Adicionar" />
            {mobile && "Adicionar"}
          </NavLink>
          <button onClick={userLogout}>
            <img src={SairImg} alt="Sair" />
            {mobile && "Sair"}
          </button>
        </Container>
        }

        {mobile &&
          <MobileContainer
            isActive={isMobileMenuActive}
          >
            <NavLink to="/conta" end>
              <img src={FeedImg} alt="Feed" />
              {mobile && "Minhas fotos"}
            </NavLink>

            <NavLink to="/conta/statistics">
              <img src={EstatisticasImg} alt="Estatisticas" />
              {mobile && "Estatísticas"}
            </NavLink>

            <NavLink to="/conta/posts">
              <img src={AdicionarImg} alt="Adicionar" />
              {mobile && "Adicionar"}
            </NavLink>
            <button onClick={userLogout}>
              <img src={SairImg} alt="Sair" />
              {mobile && "Sair"}
            </button>
          </MobileContainer>
        }
        
    
      
    </>
  );
}
