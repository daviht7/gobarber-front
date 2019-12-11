import React from "react";
import logo from "~/assets/logo-purple.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Content, Profile } from "./styles";
import Notification from "../Notification";

export default function Header() {
  const user = useSelector(state => state.user.profile);
  console.log(user);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img src={user.avatar.url} alt="Davi Holanda" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
