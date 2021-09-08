// import axios from "axios";
import React from "react";
import { UserContext } from "../../../../context";
import useForm from "../../../../shared/hooks/useForm";
import Button from "../../../Form/Button";
import Input from "../../../Form/Input";
import { Container, Title, Form, LinkForgot, LinkRegister, RegisterContainer } from "./styles";
import Error from '../../../../shared/helper/Error'

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

      <Form onSubmit={handleSubmitLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled type="submit">Carregando...</Button> : <Button type="submit">Entrar</Button>}
        <Error error={error} />
      </Form>
      
      <LinkForgot to='/login/forgot'>Perdeu a senha?</LinkForgot>

      <RegisterContainer>
        <h2>Cadastre-se</h2>
        <p>Ainda nãopossui conta ? Cadastre-se no site.</p>
        <LinkRegister to="/login/create">Cadastro</LinkRegister>
      </RegisterContainer>
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