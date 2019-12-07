import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUpRequest } from "~/store/modules/user/actions";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("O e-mail é obrigatório."),
  name: Yup.string().required("O nome é obrigatório."),
  password: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .required("A senha é obrigatória")
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="Logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input placeholder="seu nome" name="name" />
        <Input type="email" name="email" placeholder="seu email" />
        <Input
          type="password"
          placeholder="sua senha"
          name="password"
          id="password"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
