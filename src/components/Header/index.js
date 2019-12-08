import React from "react";
import logo from "~/assets/logo-purple.svg";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Davi Holanda</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt="Davi Holanda"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
