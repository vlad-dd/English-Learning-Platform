import { fireEvent, render, screen } from '@testing-library/react';
import SiderComponent from './presentational';
import { act } from 'react-dom/test-utils';
import { withReduxProvider, withRouterProvider } from '../test-utils/hocs';

const SiderComponentWithProvider = withRouterProvider(withReduxProvider(SiderComponent));

describe('Sider Component', () => {
  it('should render Sider Component with options', () => {
    const options = ['Tenses', 'Grammar Levels', 'Dictionary', 'Releases'];
    render(<SiderComponentWithProvider />);
    expect(screen.getByTestId('sider-menu')).toBeInTheDocument();
    options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
  });

  it('should have company logo', () => {
    render(<SiderComponentWithProvider />);
    expect(screen.getByRole('link').getAttribute('href')).toBe('/');
    expect(screen.getByTestId('company-logo').getAttribute('src')).toBe('white.svg');
  });

  it('should trigger sider footer', () => {
    render(<SiderComponentWithProvider />);
    const siderTrigger = screen.getByTestId('sider-menu').querySelector('.ant-layout-sider-trigger');
    expect(siderTrigger?.querySelector('.anticon')).toBeInTheDocument();
    expect(siderTrigger?.querySelector('.anticon')?.getAttribute('aria-label')).toBe('left');
    act(() => fireEvent.click(screen.getByTestId('sider-menu').querySelector('.ant-layout-sider-trigger') as HTMLElement));
    expect(siderTrigger?.querySelector('.anticon')?.getAttribute('aria-label')).toBe('right');
  });
})