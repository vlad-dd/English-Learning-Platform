import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from '.'

export default {
    title: 'Common/Image',
    component: Image,
    argTypes: {
        id: {
            type: "string",
            description: 'Image ID which is used only for testing purposes',
            defaultValue: ""
        },
        url: {
            type: "string",
            description: "Image URL",
            defaultValue: "https://i.ytimg.com/vi/tZGBfqCNwIQ/maxresdefault.jpg"
        },
        styles: {
            description: `Provide any styles you want to display the image.`,
            defaultValue: {
                width: "500px"
            }
        }
    }
} as ComponentMeta<typeof Image>;

const ImageTemplate: ComponentStory<typeof Image> = (args) => <Image {...args}/>;

export const ImageStory = ImageTemplate.bind({});
