import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../context/index.js";
import PageNotFound from "../PageNotFound/index.js";
import CreateAccount from "./components/CreateAccount/index.js";
import ForgotPassword from "./components/ForgotPassword/index.js";
import LoginForm from "./components/LoginForm.js";
import ResetPassword from "./components/ResetPassword/index.js";
import { Container, Forms } from "./styles.js";

export default function Login() {

  const {login} = React.useContext(UserContext)

  if (login === true) return <Navigate to ='/conta' />

  return (
    <Container>
      <Forms>
        <Routes>

          <Route path="/" element={<LoginForm />} />

          <Route path="create" element={ <CreateAccount />} />

          <Route path="forgot" element={<ForgotPassword />} />

          <Route path="reset" element={<ResetPassword />} />

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Forms>  
    </Container>
  );
}
