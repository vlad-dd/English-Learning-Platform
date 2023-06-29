import * as ReactRedux from 'react-redux';
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen } from "@testing-library/react";
import { withReduxProvider, withRouterProvider } from '../test-utils/hocs';
import { MENU_OPTIONS_DATA_TEST_ID } from './constants';
import SiderMenu from "./presentational";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

const SiderMenuWithProvider = withRouterProvider(withReduxProvider(SiderMenu));

describe('Options Menu', () => {
  const useDispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(dispatch);
    render(<SiderMenuWithProvider />);
  });

  afterEach(() => useDispatchSpy.mockClear());

  it('should render options menu', () => {
    const options = ['Tenses', 'Grammar Levels', 'Dictionary', 'Releases'];
    expect(screen.getByTestId(MENU_OPTIONS_DATA_TEST_ID)).toBeInTheDocument();
    options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
  });

  it('should render present options menu', () => {
    const options = ['Simple', 'Continuous', 'Perfect', 'Perfect C'];
    expect(screen.getByTestId(MENU_OPTIONS_DATA_TEST_ID)).toBeInTheDocument();
    act(() => fireEvent.click(screen.getByText('Tenses')))
    act(() => fireEvent.click(screen.getByText('Present')))
    options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
  });

  it('should call dispatch 3 times after pressing on verb', () => {
    act(() => fireEvent.click(screen.getByText('Tenses')))
    act(() => fireEvent.click(screen.getByText('Present')))
    act(() => fireEvent.click(screen.getByText('Simple')))
    expect(screen.getByText('Simple')).toBeInTheDocument();
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

})
