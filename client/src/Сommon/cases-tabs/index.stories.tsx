import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CasesTabs from '.';

export default {
  title: 'Common/Cases',
  component: CasesTabs,
} as ComponentMeta<typeof CasesTabs>;

const Template: ComponentStory<typeof CasesTabs> = (args) => <CasesTabs {...args} />;

export const CasesTab = Template.bind({});
CasesTab.args = {
    config: [
        {
          icon: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
          key: "1",
          label: "Affirmative",
          titles: [
            { description: "Affirmative description" },
            { description: "Another description" },
            { description: "New description" },
        ],
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
          key: "2",
          label: "Question",
          titles: [
            { description: "Negative description" },
            { description: "Another description" },
            { description: "New description" },
        ],
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/128/1260/1260667.png",
          key: "3",
          label: "Negative",
          titles: [
            { description: "Question description" },
            { description: "Another description" },
            { description: "New description" },
        ],
        },
      ]
}

