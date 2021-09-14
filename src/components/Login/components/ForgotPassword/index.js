import { FORGOT_PASSWORD } from "../../../../api";
import Error from "../../../../shared/helper/Error";
import useFetch from "../../../../shared/hooks/useFetch";
import useForm from "../../../../shared/hooks/useForm";
import Button from "../../../Form/Button";
import Input from "../../../Form/Input";

export default function ForgotPassword() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmitForgottPassword(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = FORGOT_PASSWORD({
        login: login.value,
        url: window.location.href.replace('forgot', 'reset'),
      });
      const {json} = await request(url, options);
      console.log(json);
    }
  }

  return (
    <div>
      <h1>Perdeu a senha ?</h1>

      {data ? (
        <p>{data}</p>
      ) : (
        <form onSubmit={handleSubmitForgottPassword}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </div>
  );
}
