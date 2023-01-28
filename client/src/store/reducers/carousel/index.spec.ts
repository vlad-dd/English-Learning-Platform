/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { reducer, actions as CarouselActions, initialState } from ".";

enum CarouselConfiguration {
    actualSentenceIndex = 15,
    earnedPoints = 5
}

describe("Registration Slice", () => {
  it("should initialize the state in right way", () => {
    const initialAction = { type: "initial", payload: {} };
    const nextState = reducer(initialState, initialAction);
    expect(nextState).toEqual(initialState);
  });

  it("should set actual sentence index", () => {
    const nextState = reducer(initialState, CarouselActions.setActualSentenceIndex(CarouselConfiguration.actualSentenceIndex));
    expect(nextState).toHaveProperty('actualSentenceIndex', CarouselConfiguration.actualSentenceIndex);
  });

  it('should set earned points count', () => {
    const nextState = reducer(initialState, CarouselActions.setEarnedPoints(CarouselConfiguration.earnedPoints));
    expect(nextState).toHaveProperty('points', CarouselConfiguration.earnedPoints);
  });

});
