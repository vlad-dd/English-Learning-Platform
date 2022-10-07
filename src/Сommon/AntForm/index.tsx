import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { register } from '../../store/reducers/registration';
import * as STRINGS from './strings';

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

  const handleSignIn = (email: string, password: string) => {
    if (!email && !password) {
      message.error(STRINGS.ERRORS['EMPTY_FIELDS']);
    } else if (email.length > 0 && password.length > 0) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          if (user) {
            navigate(navigatePath);
          }
        })
        .catch(() => message.error(STRINGS.ERRORS['UNEXISTED_USER']));
    } else if (email.length === 0 || password.length === 0) {
      message.error(STRINGS.ERRORS['HALF_EMPTY_FIELDS']);
    }
  };

  const handleRegistration = (email: string, password: string) => {
    if (!email && !password) {
      message.error(STRINGS.ERRORS.EMPTY_FIELDS);
    } else if (email.length > 0 && password.length > 0) {
      auth.createUserWithEmailAndPassword(email, password).then((user) => {
        if (user) {
          dispatch(register(user));
          navigate(navigatePath);
        }
      }).catch(() => message.error(STRINGS.ERRORS.NOT_ACCEPTABLE_FORMAT));
    } else if (email.length === 0 || password.length === 0) {
      message.error(STRINGS.ERRORS.HALF_EMPTY_FIELDS);
    }
  };

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (action === STRINGS.ACTIONS.LOGIN) {
      handleSignIn(email, password);
    } else if (action === STRINGS.ACTIONS.REGISTRATION) {
      handleRegistration(email, password);
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
