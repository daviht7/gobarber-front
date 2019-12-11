import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileRequest } from "../../store/modules/user/actions";
import { signOut } from "~/store/modules/auth/actions";
import { Container } from "./styles";
import AvatarInput from "./AvatarInput";

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    console.log("dados", data);
    dispatch(updateProfileRequest(data));
  }
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
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

      <button type="button" onClick={handleSignOut}>
        Sair do Sistema
      </button>
    </Container>
  );
}
