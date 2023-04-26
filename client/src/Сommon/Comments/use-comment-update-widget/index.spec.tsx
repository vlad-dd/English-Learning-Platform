import { renderHook, act, render, waitFor } from '@testing-library/react'
import useCommentUpdatingWidget from '.'
import { MockedProvider } from '@apollo/client/testing'
import { ADD_COMMENT } from '../graphql';
import * as Apollo from '@apollo/client';

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useMutation: jest.fn()
}))

const client = new Apollo.ApolloClient({
  uri: "http://localhost:4000",
  cache: new Apollo.InMemoryCache(),
});

const EXPECTED_COLLECTION_ITEM = {
  variables:
    { collection: "posts", comment: "<div>some html text</div>", id: "1" }
}

const wrapper = ({ children }: any) => <Apollo.ApolloProvider client={client}>{children}</Apollo.ApolloProvider>;

describe('useCommentUpdatingWidget', () => {
  const refetch = jest.fn();
  const mutateFunction = jest.fn();
  const collection = 'posts';
  const document = '1';
  const mutationMock: any = (query: string) => jest.spyOn(Apollo, 'useMutation');

  it('should render default hook state', () => {
    mutationMock(ADD_COMMENT).mockReturnValue([mutateFunction, { loading: false, error: undefined }]);
    const { result } = renderHook(() => useCommentUpdatingWidget(refetch, collection, document), { wrapper })
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(undefined);
    expect(result.current.addComment).toEqual(expect.any(Function));
  });

  it('should test mutation process', async () => {
    mutationMock(ADD_COMMENT).mockReturnValue([mutateFunction, { loading: false, error: undefined }]);
    const { result } = renderHook(() => useCommentUpdatingWidget(refetch, collection, document), { wrapper })
    act(() => {
      result.current.addComment('<div>some html text</div>')
    })
    await waitFor(() => {
      expect(mutateFunction).toHaveBeenCalledWith(EXPECTED_COLLECTION_ITEM);
      expect(mutateFunction).toHaveBeenCalledTimes(1);
      expect(refetch).toHaveBeenCalledTimes(1);
    });
  });

  it('should not call functions if error exists', async () => {
    mutationMock(ADD_COMMENT).mockReturnValue([mutateFunction, { loading: false, error: new Apollo.ApolloError({}) }]);
    const { result } = renderHook(() => useCommentUpdatingWidget(refetch, collection, document), { wrapper })
    act(() => {
      result.current.addComment('<div>some html text</div>')
    })
    await waitFor(() => {
      expect(mutateFunction).not.toHaveBeenCalledWith(EXPECTED_COLLECTION_ITEM);
      expect(mutateFunction).not.toHaveBeenCalledTimes(1);
      expect(refetch).not.toHaveBeenCalledTimes(1);
    });
    
  });

})