// import React from 'react';
// import { renderHook } from "@testing-library/react"
// import { get } from 'lodash';
// import { ResponseContext } from './../../../Main/presentational';
// import { usePracticeData } from "."


// describe('usePracticeData', () => {

//     const sentenceMock = [{
//         id: 1,
//         label: 'MockLabel',
//         partOne: 'MockPartOne',
//         partTwo:'MockPartTwo',
//         missed: 'MockMissed'
//     }];

//     const ResponseContextWrapper = ({ children }: { children: JSX.Element }) => (
//         <ResponseContext.Provider value={sentenceMock}>{children}</ResponseContext.Provider>
//     );

//     it('should return sentences', () => {
//         const { result } = renderHook(() => usePracticeData(), { wrapper: ResponseContextWrapper });
//         const { id, label, partOne, partTwo, missed } = get(result, 'current.sentences[0]')
//         expect(result.current.sentences.length).toBe(1);
//         expect(id).toBe(1);
//         expect(label).toBe('MockLabel');
//         expect(partOne).toBe('MockPartOne');
//         expect(partTwo).toBe('MockPartTwo');
//         expect(missed).toBe('MockMissed');
//     });
// })
export {};