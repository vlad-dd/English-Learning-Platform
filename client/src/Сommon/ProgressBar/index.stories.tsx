import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressBar from '.'

export default {
    title: 'Common/ProgressBar',
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const ProgressBarTemplate: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args}/>;

export const CircleProgressBarTemplate = ProgressBarTemplate.bind({});
CircleProgressBarTemplate.args = {
    type: "circle",
    percent: 35,
}

export const LineProgressBarTemplate = ProgressBarTemplate.bind({});
LineProgressBarTemplate.args = {
    type: "line",
    percent: 65,
}

export const DashBoradProgressBarTemplate = ProgressBarTemplate.bind({});
DashBoradProgressBarTemplate.args = {
    type: "dashboard",
    percent: 25,
}

