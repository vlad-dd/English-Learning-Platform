import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BreadCrumbPath from '.';
import { Provider } from 'react-redux';
import store from '../../store';
import { breadcrumbPath } from '../../store/reducers/bread-crumb';

export default {
  title: 'Common/BreadCrumbPath',
  component: BreadCrumbPath,
  decorators: [
    (story) => (<Provider store={store}>{story()}</Provider>)
    // or (Story) => (<Provider store={store}><Story /></Provider>)
  ]
} as ComponentMeta<typeof BreadCrumbPath>;

const Template: ComponentStory<typeof BreadCrumbPath> = () => <BreadCrumbPath />;

export const BreadCrumb = Template.bind({});
store.dispatch(breadcrumbPath(['Tenses', 'Present', 'Present-Perfect']));


