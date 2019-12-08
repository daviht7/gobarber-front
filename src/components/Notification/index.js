import React from "react";

import { MdNotifications } from "react-icons/md";
import { Container, Badge, NotificationList, Scroll, Notific } from "./styles";

export default function Notification() {
  return (
    <Container>
      <Badge>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notific>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>Há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notific>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
