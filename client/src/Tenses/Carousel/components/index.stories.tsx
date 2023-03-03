import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TenseContext } from '../../Context'
import store from '../../../store';
import CarouselQuiz from '.';

const SentencesMock = {
    configuration: {
        practice: [
            {
                sentences: [
                    {
                        id: 1,
                        label: "Mock Practice Label",
                        missed: "Answer",
                        partOne: "Mock Practice Part One",
                        partTwo: "Mock Practice Part Two",
                    },
                    {
                        id: 2,
                        label: "Mock Practice Label",
                        missed: "Answer",
                        partOne: "Mock Practice Part One",
                        partTwo: "Mock Practice Part Two",
                    },
                ],
            },
        ],

    }
}

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

export default {
    title: 'Tenses/CarouselQuiz',
    component: CarouselQuiz,
    decorators: [
        (story) => (
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <TenseContext.Provider value={SentencesMock}>{story()}</TenseContext.Provider>
                </Provider>
            </ApolloProvider>
        )
    ]
} as ComponentMeta<typeof CarouselQuiz>;

const Template: ComponentStory<typeof CarouselQuiz> = () => <CarouselQuiz />;

export const Carousel = Template.bind({});



