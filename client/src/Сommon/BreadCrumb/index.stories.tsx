import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { breadcrumbPath } from '../../store/reducers/bread-crumb';
import store from '../../store';
import BreadCrumbPath from '.';

export default {
  title: 'Common/BreadCrumbPath',
  component: BreadCrumbPath,
  decorators: [
    (story) => (<Provider store={store}>{story()}</Provider>)
  ]
} as ComponentMeta<typeof BreadCrumbPath>;

const Template: ComponentStory<typeof BreadCrumbPath> = () => <BreadCrumbPath />;

export const BreadCrumb = Template.bind({});
store.dispatch(breadcrumbPath(['Tenses', 'Present', 'Present-Perfect']));


