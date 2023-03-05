import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from '.'

export default {
    title: 'Common/ProgressBar',
    component: ProgressBar,
    argTypes: {
        type: {
            type: 'string',
            description: 'The view of Progress Bar',
            options: ['circle', 'line', 'dashboard'],
            defaultValue: "circle",
            control: {
                type: "radio"
            }
        },
        percent: {
            type: 'number',
            description: 'Progress percentage',
            defaultValue: 0,

        },
        width: {
            type: "number",
            description: 'The with of progress bar',
            defaultValue: 150
        }
    }
} as ComponentMeta<typeof ProgressBar>;

const ProgressBarTemplate: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args}/>;

export const ProgressBarStory = ProgressBarTemplate.bind({});
