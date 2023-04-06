import React from 'react';
import { renderHook } from "@testing-library/react"
import { usePracticeData } from "."
import * as Config from '../../../../Hooks';
import { get } from 'lodash';

jest.mock("../../../../Hooks");

const practice = [
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

describe('usePracticeData', () => {
  it('should return practice data', () => {

    const practiceDataSpy: any = jest.spyOn(Config, "useConfiguration");
    const mockExtractValueByPath = jest.fn(() => ({ practice }));
    practiceDataSpy.mockReturnValue({ extractValueByPath: mockExtractValueByPath });
    const { result: { current } } = renderHook(() => usePracticeData());
    expect(mockExtractValueByPath).toHaveBeenCalledWith("countOfTenses[0]");
    expect(mockExtractValueByPath).toHaveBeenCalledTimes(1);
    
    const { id, label, partOne, partTwo, missed } = get(current, 'sentences[0]')
    expect(current.sentences.length).toBe(1);
    expect(id).toBe(1);
    expect(label).toBe('Affirmative');
    expect(partOne).toBe('Mocked Part One');
    expect(partTwo).toBe('Mocked Part Two');
    expect(missed).toBe('Mocked Missed Correct Value');
  });
})
