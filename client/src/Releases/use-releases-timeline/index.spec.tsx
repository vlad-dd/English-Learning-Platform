import { MockedProvider } from "@apollo/client/testing";
import { renderHook, waitFor } from "@testing-library/react";
import { get } from "lodash";
import { useReleasesTimeLineWidget } from ".";
import { GET_RELEASES_TIMELINE } from "../graphql";

const response = {
    data: {
        releases: [{ id: '1', title: 'Mocked Release', date: '14.02.2023', version: '0.0.1', description: 'Release is on board!', isLastUpdate: true }]
    },
    isLoading: false,
    error: undefined
}

const mocks = [
    {
      request: {
        query: GET_RELEASES_TIMELINE,
      },
      result: response,
    },
  ];

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
        <MockedProvider mocks={mocks}>
         {children}
        </MockedProvider>
    )

}

describe('useReleasesTimeLine', () => {
    it('should return response', async() => {
        const { result } = renderHook(() => useReleasesTimeLineWidget(), { wrapper: ApplicationProviders })
        await waitFor(() => {
            const releaseInformation = get(result, 'current.data.releases[0]');
            expect(releaseInformation.id).toBe('1');
            expect(releaseInformation.date).toBe('14.02.2023');
            expect(releaseInformation.description).toBe('Release is on board!');
            expect(releaseInformation.isLastUpdate).toBe(true);
            expect(releaseInformation.title).toBe('Mocked Release');
            expect(releaseInformation.version).toBe('0.0.1');
        })
    })
})