import React from "react";
import { AuthLayout } from "./AuthLayout";
import { RegistrationForm } from "./components/registration-form";

export const RegistrationPage = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};
