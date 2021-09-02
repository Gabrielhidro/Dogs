import { Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount.js/index.js";
import ForgotPassword from "./components/ForgotPassword/index.js";
import LoginForm from "./components/LoginForm.js";
import ResetPassword from "./components/ResetPassword/index.js";

export default function Login() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <LoginForm />
        </Route>
        <Route path="create">
          <CreateAccount />
        </Route>
        <Route path="forgot">
          <ForgotPassword />
        </Route>
        <Route path="reset">
          <ResetPassword />
        </Route>
      </Switch>
    </div>
  );
}
