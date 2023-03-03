import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import store from '../../store';
import AntForm from '.';
import { BrowserRouter } from 'react-router-dom';

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
    action: "registration",
    navigatePath: "/login"
}

export const LoginForm = AntFormTemplate.bind({});
LoginForm.args = {
    action: "login",
    navigatePath: "/"
}




