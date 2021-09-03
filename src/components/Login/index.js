import { Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccount/index.js";
import ForgotPassword from "./components/ForgotPassword/index.js";
import LoginForm from "./components/LoginForm.js";
import ResetPassword from "./components/ResetPassword/index.js";

export default function Login() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<LoginForm />} />

        <Route path="/create" element={ <CreateAccount />} />

        <Route path="forgot" element={<ForgotPassword />} />

        <Route path="reset" element={<ResetPassword />} />

      </Routes>
    </div>
  );
}
