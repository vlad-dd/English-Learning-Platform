import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Releases from './presentational';
import { ApolloProvider } from '@apollo/client';
import { buildApolloClientInstance } from '../test-utils';

const apolloClientInstance = buildApolloClientInstance();

export default {
    title: 'Application/Releases',
    component: Releases,
    decorators: [
        (story) => (<ApolloProvider client={apolloClientInstance} children={story()} />)
    ]
} as ComponentMeta<typeof Releases>;

const ReleasesTemplate: ComponentStory<typeof Releases> = () => <Releases />;

export const Release = ReleasesTemplate.bind({});


