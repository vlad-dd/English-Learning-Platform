import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoadingSpinner from '.'

export default {
    title: 'Common/LoadingSpinner',
    component: LoadingSpinner,
    argTypes: {
        size: {
            description: "Size of the loading spinner",
            options: ["small", "default", "large"],
            defaultValue: "default",
            control: {
                type: "radio"
            }
        }
    }
} as ComponentMeta<typeof LoadingSpinner>;

const LoadingSpinnerTemplate: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args}/>;

export const LoadingSpinnerStory = LoadingSpinnerTemplate.bind({});
