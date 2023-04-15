import React from 'react';
import 'intersection-observer';
import { ApolloError } from '@apollo/client/errors';
import { render } from '@testing-library/react'
import Releases from './presentational'
import * as Hook from './use-releases-timeline';

const response = {
    data: {
        releases: [{ id: 1, title: 'Mocked Release', date: '14.02.2023', version: '0.0.1', description: 'Release is on board!', isLastUpdate: true }]
    },
    isLoading: false,
    error: undefined
}

jest.mock('./use-releases-timeline', () => ({
    useReleasesTimeLineWidget: jest.fn()
}))

describe('Releases', () => {
    const spy = jest.spyOn(Hook, 'useReleasesTimeLineWidget');
    it('should render Release component with configuration', () => {
       spy.mockReturnValue(response)
       const releaseInformation = ['Version: 0.0.1', 'Last Update', 'Mocked Release', 'Release is on board!', '14.02.2023']; 
       const { getByText, getByTestId } = render(<Releases />);
       releaseInformation.forEach((information) =>  expect(getByText(information)).toBeInTheDocument());
       expect(getByTestId('content-section-wrapper')).toBeInTheDocument();
    });

    it('should waiting for releases response', () => {
        spy.mockReturnValue({...response, isLoading: true})
        const { getByText } = render(<Releases />);
        expect(getByText('Loading...')).toBeInTheDocument();
     });

     it('should return error with request', () => {
        spy.mockReturnValue({...response, error: new ApolloError({}) })
        const { getByText } = render(<Releases />);
        expect(getByText('Something happened with request, ApolloError')).toBeInTheDocument();
     });
})
