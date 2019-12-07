import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido.")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
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
