import React from "react";
import { Button, Form, Input } from "antd";
import { useFormConfigurationWidget } from "./use-form-configuration";
import { IFormProps } from "../types";
import {
  FORM_BUTTONS,
  FORM_EMAIL_INPUT_DATA_TEST_ID,
  FORM_LABELS,
  FORM_MESSAGES,
  FORM_NAMES,
  FORM_PASSWORD_INPUT_DATA_TEST_ID,
  FORM_SUBMIT_BUTTON_DATA_TEST_ID,
  INPUT_FORM_DATA_TEST_ID
} from "../constants";

const { Item, useForm } = Form;

const AntForm: React.FC<IFormProps> = ({ action, navigatePath }) => {
  const [form] = useForm();

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
      data-testid={INPUT_FORM_DATA_TEST_ID}
      name={FORM_NAMES.BASIC}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
    >
      <Item
        label={FORM_LABELS.EMAIL}
        name={FORM_NAMES.EMAIL}
        rules={[{ required: true, message: FORM_MESSAGES.EMAIL }]}
      >
        <Input
          data-testid={FORM_EMAIL_INPUT_DATA_TEST_ID}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleEmail(e.target.value)
          }
        />
      </Item>

      <Item
        label={FORM_LABELS.PASSWORD}
        name={FORM_NAMES.PASSWORD}
        rules={[{ required: true, message: FORM_MESSAGES.PASSWORD }]}
      >
        <Input.Password
          data-testid={FORM_PASSWORD_INPUT_DATA_TEST_ID}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePassword(e.target.value)
          }
        />
      </Item>

      <Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          data-testid={FORM_SUBMIT_BUTTON_DATA_TEST_ID}
          type="primary"
          htmlType="submit"
          onClick={(e: React.SyntheticEvent) => onFormSubmit(e)}
        >
          {FORM_BUTTONS.SUBMIT}
        </Button>
        <Button
          onClick={onReset}
          style={{ marginLeft: "15px" }}
          htmlType="button"
        >
          {FORM_BUTTONS.RESET}
        </Button>
      </Item>
    </Form>
  );
};

export default AntForm;
