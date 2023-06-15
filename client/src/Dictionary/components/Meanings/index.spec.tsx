import { render, screen } from '@testing-library/react';
import { DictionaryConfigurationContext } from "../../Context";
import Meanings from ".";

const dictionaryMock = [{
    meanings: [{
        __typename: 'Mocked Dictionary',
        antonyms: ['antonym'],
        synonyms: ['synonym'],
        definitions: [{
            __typename: 'Mocked Definition Typename',
            definition: 'Mocked Definition',
            antonyms: ['antonym'],
            synonyms: ['synonym'],
            example: 'Mocked Example'
        }],
        partOfSpeech: 'Mocked Part Of Speech'
    }]
}];

describe('Meanings', () => {
    beforeEach(() => {
        render(
            <DictionaryConfigurationContext.Provider value={{ data: { dictionary: dictionaryMock }, isLoading: false, searchWordInDictionary: jest.fn(), error: undefined  }}>
                <Meanings />
            </DictionaryConfigurationContext.Provider>)
    });

    it('should render Meanings Table', () => {
        expect(screen.getByTestId('definitions-table')).toBeInTheDocument();
        expect(screen.getByTestId('definitions-table').className).toBe('ant-table');
    });

    it('should render Meanings Part Of Speech', () => {
        expect(screen.getByText('Part Of Speech')).toBeInTheDocument();
        expect(screen.getByText('Mocked Part Of Speech')).toBeInTheDocument();
    });

    it('should render Meanings definitions', () => {
        expect(screen.getByText('Definitions')).toBeInTheDocument();
        expect(screen.getByText('Mocked Definition')).toBeInTheDocument();
    });
});