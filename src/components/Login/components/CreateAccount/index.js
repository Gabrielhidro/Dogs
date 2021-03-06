import React from "react";
import { USER_POST } from "../../../../api";
import { UserContext } from "../../../../context";
import useForm from "../../../../shared/hooks/useForm";
import Button from "../../../Form/Button";
import Input from "../../../Form/Input";
import { Container, Title } from "./styles";
import useFetch from "../../../../shared/hooks/useFetch";
import Error from '../../../../shared/helper/Error'

export default function CreateAccount () {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request } = useFetch();

  async function handleSubmit(event){
    event.preventDefault()
    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const {response} = await request(url, options)
    if (response.ok){
      return userLogin(username.value, password.value)
    }     
  }

  return (
    <Container>
      <Title>Create Account</Title>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? <Button disabled>Carregando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error} />
      </form>
    </Container>
  );
}