import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import store from '../../store';
import AntForm from '.';
import { ACTION_NAVIGATE_PATH, FORM_ACTIONS } from '../constants';

export default {
    title: 'Auth/Form',
    component: AntForm,
    decorators: [
        (story) => (
            <BrowserRouter>
                <Provider store={store}>
                    {story()}
                </Provider>
            </BrowserRouter>
        )
    ]
} as ComponentMeta<typeof AntForm>;

const AntFormTemplate: ComponentStory<typeof AntForm> = (args) => <AntForm {...args} />;

export const RegistrationForm = AntFormTemplate.bind({});
RegistrationForm.args = {
    action: FORM_ACTIONS.REGISTRATION,
    navigatePath: ACTION_NAVIGATE_PATH.LOGIN
}

export const LoginForm = AntFormTemplate.bind({});
LoginForm.args = {
    action: FORM_ACTIONS.LOGIN,
    navigatePath: ACTION_NAVIGATE_PATH.HOME
}




