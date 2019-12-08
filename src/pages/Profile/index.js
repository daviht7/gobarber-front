import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="sua senha atual"
        />
        <Input type="password" name="password" placeholder="sua nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="confirme nova senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>

      <button type="button">Sair do Sistema</button>
    </Container>
  );
}
