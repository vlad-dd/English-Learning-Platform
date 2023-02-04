import React, { useState } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import * as STRINGS from "./strings";
import FireBaseAPI from "../firebase-api";

interface Props {
    action?: "login" | "registration";
    navigatePath?: "/" | "/login";
  }

export const useFormConfiguration = (action: "login" | "registration", navigatePath: "/" | "/login") => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (action === STRINGS.ACTIONS.LOGIN) {
      FireBaseAPI.handleSignIn(email, password, navigate, navigatePath);
    }
    if (action === STRINGS.ACTIONS.REGISTRATION) {
      FireBaseAPI.handleRegistration(
        email,
        password,
        navigate,
        navigatePath,
        dispatch
      );
    }
  };

  return {
    email,
    password,
    handleEmail,
    handlePassword,
    onFormSubmit,
  };
};
