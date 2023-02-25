import React from 'react';
import { renderHook } from "@testing-library/react"
import { get } from 'lodash';
import { usePracticeData } from "."
import { TenseContext } from '../../../Context';

const mockedApolloResponse = {
    configuration: {
      practice: [
        {
          sentences: [
            {
              id: 1,
              label: 'Affirmative',
              partOne: 'Mocked Part One',
              partTwo: 'Mocked Part Two',
              missed: 'Mocked Missed Correct Value'
            }
          ]
        }
      ]
    },
  };


describe('usePracticeData', () => {

    const ResponseContextWrapper = ({ children }: { children: JSX.Element }) => (
        <TenseContext.Provider value={mockedApolloResponse}>{children}</TenseContext.Provider>
    );

    it('should return sentences', () => {
        const { result } = renderHook(() => usePracticeData(), { wrapper: ResponseContextWrapper });
        const { id, label, partOne, partTwo, missed } = get(result, 'current.sentences[0]')
        expect(result.current.sentences.length).toBe(1);
        expect(id).toBe(1);
        expect(label).toBe('Affirmative');
        expect(partOne).toBe('Mocked Part One');
        expect(partTwo).toBe('Mocked Part Two');
        expect(missed).toBe('Mocked Missed Correct Value');
    });
})
