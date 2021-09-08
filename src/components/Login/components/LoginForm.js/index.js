// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../context";
import useForm from "../../../../shared/hooks/useForm";
import Button from "../../../Form/Button";
import Input from "../../../Form/Input";
import { Container, Title } from "./styles";

export default function LoginForm() {
  const username = useForm("");
  const password = useForm("");

  const {userLogin, error, loading} = React.useContext(UserContext)

  async function handleSubmitLogin(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  
  return (
    <Container>
      <Title>Login</Title>

      <form onSubmit={handleSubmitLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled type="submit">Carregando...</Button> : <Button type="submit">Entrar</Button>}
        {error && <p>{error}</p>}
      </form>

      <Link to="/login/create">Cadastro</Link>
    </Container>
  );
}

// const response = await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
//   password: password,
//   username: username
// })
// const data = response.data
// console.log(data);
// return response