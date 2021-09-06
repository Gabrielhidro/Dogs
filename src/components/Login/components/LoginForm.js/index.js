import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST } from "../../../../api";
import useForm from "../../../../shared/hooks/useForm";
import Button from "../../../Form/Button";
import Input from "../../../Form/Input";

export default function LoginForm() {
  const username = useForm("");
  const password = useForm("");

  async function handleSubmitLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      fetch(url, options)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }

    // const response = await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    //   password: password,
    //   username: username
    // })
    // const data = response.data
    // console.log(data);
    // return response
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmitLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button type="submit">Entrar</Button>
      </form>

      <Link to="/login/create">Cadastro</Link>
    </div>
  );
}
