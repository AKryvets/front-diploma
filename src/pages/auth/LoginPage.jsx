import React from "react";
import { AuthLayout } from "./AuthLayout";
import { LoginForm } from "./components";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
