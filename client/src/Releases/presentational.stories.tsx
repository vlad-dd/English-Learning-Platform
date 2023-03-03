import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Releases from './presentational';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

export default {
    title: 'Application/Releases',
    component: Releases,
    decorators: [
        (story) => (<ApolloProvider client={client}>{story()}</ApolloProvider>)
    ]
} as ComponentMeta<typeof Releases>;

const ReleasesTemplate: ComponentStory<typeof Releases> = () => <Releases />;

export const Release = ReleasesTemplate.bind({});


