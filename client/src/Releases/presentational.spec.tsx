import 'intersection-observer';
import { screen, render } from '@testing-library/react'
import Releases from './presentational'
import * as Hook from './use-releases-timeline';
import { buildApolloError } from '../test-utils';
import { withIntlProvider, withRouterProvider } from '../test-utils/hocs';
import { CONTENT_SECTION_WRAPPER_DATA_TEST_ID } from '../Dictionary/constants';
import { LOADING_PROGRESS_DATA_TEST_ID } from '../Сommon/LoadingProgress/constants';
import { ERROR_PAGE_DATA_TEST_ID } from '../Сommon/error-handler-page/constants';

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
    const ReleasesWithProvider = withRouterProvider(withIntlProvider(Releases));
    const spy = jest.spyOn(Hook, 'useReleasesTimeLineWidget');

    it('should render Release component with configuration', () => {
       spy.mockReturnValue(response)
       const releaseInformation = ['Version: 0.0.1', 'Last Update', 'Mocked Release', 'Release is on board!', '14.02.2023']; 
       render(<ReleasesWithProvider />);
       releaseInformation.forEach((information) =>  expect(screen.getByText(information)).toBeInTheDocument());
       expect(screen.getByTestId(CONTENT_SECTION_WRAPPER_DATA_TEST_ID)).toBeInTheDocument();
    });

    it('should waiting for releases response', () => {
        spy.mockReturnValue({...response, isLoading: true})
        render(<ReleasesWithProvider />);
        expect(screen.getByTestId(LOADING_PROGRESS_DATA_TEST_ID)).toBeInTheDocument();
     });

     it('should return error with request', () => {
        spy.mockReturnValue({...response, error: buildApolloError() })
        render(<ReleasesWithProvider />);
        expect(screen.getByTestId(ERROR_PAGE_DATA_TEST_ID)).toBeInTheDocument();
     });
})
