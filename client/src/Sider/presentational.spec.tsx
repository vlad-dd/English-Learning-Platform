import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { withReduxProvider, withRouterProvider } from '../test-utils/hocs';
import SiderComponent from './presentational';
import { COMPANY_LOGO_DATA_TEST_ID, SIDER_MENU_DATA_TEST_ID } from './constants';
import { APPLICATION_NAVIGATION } from '../Сommon/constants';

const SiderComponentWithProvider = withRouterProvider(withReduxProvider(SiderComponent));

describe('Sider Component', () => {
  it('should render Sider Component with options', () => {
    const options = ['Tenses', 'Grammar Levels', 'Dictionary', 'Releases'];
    render(<SiderComponentWithProvider />);
    expect(screen.getByTestId(SIDER_MENU_DATA_TEST_ID)).toBeInTheDocument();
    options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
  });

  it('should have company logo', () => {
    render(<SiderComponentWithProvider />);
    expect(screen.getByRole('link').getAttribute('href')).toBe(APPLICATION_NAVIGATION.HOME);
    expect(screen.getByTestId(COMPANY_LOGO_DATA_TEST_ID).getAttribute('src')).toBe('white.svg');
  });

  it('should trigger sider footer', () => {
    render(<SiderComponentWithProvider />);
    const siderTrigger = screen.getByTestId(SIDER_MENU_DATA_TEST_ID).querySelector('.ant-layout-sider-trigger');
    expect(siderTrigger?.querySelector('.anticon')).toBeInTheDocument();
    expect(siderTrigger?.querySelector('.anticon')?.getAttribute('aria-label')).toBe('left');
    act(() => fireEvent.click(screen.getByTestId(SIDER_MENU_DATA_TEST_ID).querySelector('.ant-layout-sider-trigger') as HTMLElement));
    expect(siderTrigger?.querySelector('.anticon')?.getAttribute('aria-label')).toBe('right');
  });
})