import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TenseContext } from '../../Context'
import store from '../../../store';
import CarouselQuiz from '.';
import { buildApolloClientInstance } from '../../../test-utils';

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

const apolloClientInstance = buildApolloClientInstance();

export default {
    title: 'Tenses/CarouselQuiz',
    component: CarouselQuiz,
    decorators: [
        (story) => (
            <ApolloProvider client={apolloClientInstance}>
                <Provider store={store}>
                    <TenseContext.Provider value={SentencesMock}>{story()}</TenseContext.Provider>
                </Provider>
            </ApolloProvider>
        )
    ]
} as ComponentMeta<typeof CarouselQuiz>;

const Template: ComponentStory<typeof CarouselQuiz> = () => <CarouselQuiz />;

export const Carousel = Template.bind({});



