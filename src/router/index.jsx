import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout, HomeLayout } from "../layouts";
import { HomePage } from "../modules/home/pages";
import {
  ConfirmPage,
  ForgotPage,
  LoginPage,
  RegisterPage,
} from "../modules/auth/pages";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<RegisterPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/reset-password" element={<ForgotPage />} />
          <Route path="/auth/new-password/:email" element={<ConfirmPage />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
