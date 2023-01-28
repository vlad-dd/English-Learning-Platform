/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { reducer, actions as BreadCrumbAction, initialState } from ".";

const breadCrumbMock = ['Verb', 'Mock', 'Test'];

describe("BreadCrumb Slice", () => {
  it("should initialize the state in right way", () => {
    const initialAction = { type: "initial", payload: {} };
    const nextState = reducer(initialState, initialAction);
    expect(nextState).toEqual(initialState);
  });

  it("should set bread crumb path", () => {
    const nextState = reducer(initialState, BreadCrumbAction.breadcrumbPath(breadCrumbMock));
    expect(nextState).toHaveProperty('path', breadCrumbMock);
  });

});
