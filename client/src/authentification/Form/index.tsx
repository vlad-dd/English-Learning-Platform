import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import * as STRINGS from './strings';
import FireBaseAPI from '../firebase-api';

interface Props {
  action: 'login' | 'registration';
  navigatePath: '/' | '/login';
}

const AntForm: React.FC<Props> = ({ action, navigatePath }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (action === STRINGS.ACTIONS.LOGIN) {
      FireBaseAPI.handleSignIn(email, password, navigate, navigatePath)
    } 
    if (action === STRINGS.ACTIONS.REGISTRATION) {
      FireBaseAPI.handleRegistration(email, password, navigate, navigatePath, dispatch)
    }
  };

  return (
    <React.Fragment>
      <Form
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
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleEmail(e)
            }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: STRINGS.MESSAGES.PASSWORD}]}
        >
          <Input.Password
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePassword(e)
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={(e: React.SyntheticEvent) => onFormSubmit(e)}
          >
            {STRINGS.BUTTONS.SUBMIT}
          </Button>
          <Button
            onClick={onReset}
            style={{ marginLeft: '15px' }}
            htmlType="button"
          >
            {STRINGS.BUTTONS.RESET}
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default AntForm;
