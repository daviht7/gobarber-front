import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileRequest } from "../../store/modules/user/actions";

import { Container } from "./styles";

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
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
