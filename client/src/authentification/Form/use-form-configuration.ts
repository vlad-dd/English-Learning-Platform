import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import FireBaseAPI from "../firebase-api";
import { NavigatePath, UserAction } from "../types";
import { FORM_ACTIONS } from "../constants";

export const useFormConfigurationWidget = (action: UserAction, navigatePath: NavigatePath) => {
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

  const onFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (action === FORM_ACTIONS.LOGIN) {
      await FireBaseAPI.handleSignIn(email, password, navigate, navigatePath);
    }
    if (action === FORM_ACTIONS.REGISTRATION) {
      await FireBaseAPI.handleRegistration(
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
