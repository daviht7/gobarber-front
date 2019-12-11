import React from "react";
import api from "~/services/api";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Container, Time } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={44} color="#fff" />
        </button>
        <strong>31 de maio</strong>
        <button type="button">
          <MdChevronRight size={44} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Kelcya Holanda</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Maria Socorro</span>
        </Time>
      </ul>
    </Container>
  );
}
