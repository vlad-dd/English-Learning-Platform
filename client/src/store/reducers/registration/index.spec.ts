/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { reducer, actions as RegistrationAction, initialState } from ".";

const registeredUserMock = [
    {
        email: 'mockedUser@gmail.com',
        password: 'mockedPassword123'
    }
]

describe("Registration Slice", () => {
  it("should initialize the state in right way", () => {
    const initialAction = { type: "initial", payload: {} };
    const nextState = reducer(initialState, initialAction);
    expect(nextState).toEqual(initialState);
  });

  it("should set registered user", () => {
    const nextState = reducer(initialState,RegistrationAction.register(registeredUserMock));
    expect(nextState).toHaveProperty('user', registeredUserMock)
  });
});
