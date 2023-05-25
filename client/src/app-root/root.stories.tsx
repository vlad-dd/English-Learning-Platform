import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApplicationRoot from './presentational';
import store from '../store';

export default {
    title: 'Application/RootLayout',
    component: ApplicationRoot,
    decorators: [
        (story) => (<BrowserRouter><Provider store={store}>{story()}</Provider></BrowserRouter>)
    ]
} as ComponentMeta<typeof ApplicationRoot>;

const LayoutTemplate: ComponentStory<typeof ApplicationRoot> = () => <ApplicationRoot />;

export const Layout = LayoutTemplate.bind({});


