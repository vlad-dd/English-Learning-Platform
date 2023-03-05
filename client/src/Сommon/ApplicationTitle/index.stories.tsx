import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApplicationTitle from '.'

export default {
    title: 'Common/ApplicationTitle',
    component: ApplicationTitle,
    argTypes: {
        children: {
            type: 'string',
            description: 'JSX element which could be used as title',
            defaultValue: <>Application Title</>,
        }
    }
} as ComponentMeta<typeof ApplicationTitle>;

const ProgressBarTemplate: ComponentStory<typeof ApplicationTitle> = (args) => <ApplicationTitle {...args}/>;

export const ApplicationTitleStory = ProgressBarTemplate.bind({});
