import React from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD_RESET } from "../../../../api";
import Error from "../../../../shared/helper/Error";
import useFetch from "../../../../shared/hooks/useFetch";
import useForm from "../../../../shared/hooks/useForm";
import Button from "../../../Form/Button";
import Input from "../../../Form/Input";

export default function ResetPassword () {

  const [login, setLogin] = React.useState('')
  const [key , setKey] = React.useState('')
  const password = useForm()
  const {error, loading, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')

    if(key) setKey(key)
    if(login) setLogin(login)

  }, [])

  async function handleSubmitChangePassword(event){
    event.preventDefault()
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const response = await request(url, options)
      if(response.ok) navigate('/login')
    }
  }

  return (
    <div>]
      <h1>Resete a senha</h1>
      <form onSubmit={handleSubmitChangePassword}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Resetndo...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </div>
  );
}