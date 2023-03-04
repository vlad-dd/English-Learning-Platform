import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApplicationRoot from './presentational';
import { ThemeContext } from '../Contexts';
import store from '../store';

export default {
    title: 'Application/RootLayout',
    component: ApplicationRoot,
    decorators: [
        (story) => (<BrowserRouter><Provider store={store}><ThemeContext>{story()}</ThemeContext></Provider></BrowserRouter>)
    ]
} as ComponentMeta<typeof ApplicationRoot>;

const LayoutTemplate: ComponentStory<typeof ApplicationRoot> = () => <ApplicationRoot />;

export const Layout = LayoutTemplate.bind({});


