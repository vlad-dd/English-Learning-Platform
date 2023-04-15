import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import * as STRINGS from "./strings";
import FireBaseAPI from "../firebase-api";
import { useFormConfigurationWidget } from "./use-form-configuration";

interface Props {
  action: "login" | "registration";
  navigatePath: "/" | "/login";
}

const AntForm: React.FC<Props> = ({ action, navigatePath }) => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const {
    email,
    password,
    handleEmail,
    handlePassword,
    onFormSubmit,
  } = useFormConfigurationWidget(action, navigatePath);

  return (
      <Form
        data-testid="input-form"
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: STRINGS.MESSAGES.EMAIL }]}
        >
          <Input
            data-testid="email-input"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleEmail(e.target.value)
            }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: STRINGS.MESSAGES.PASSWORD }]}
        >
          <Input.Password
            data-testid="password-input"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePassword(e.target.value)
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            data-testid="submit-button"
            type="primary"
            htmlType="submit"
            onClick={(e: React.SyntheticEvent) => onFormSubmit(e)}
          >
            {STRINGS.BUTTONS.SUBMIT}
          </Button>
          <Button
            onClick={onReset}
            style={{ marginLeft: "15px" }}
            htmlType="button"
          >
            {STRINGS.BUTTONS.RESET}
          </Button>
        </Form.Item>
      </Form>
  );
};

export default AntForm;
