import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SiderComponent from './presentational';
import { ThemeContext } from '../Contexts';
import ErrorBoundary from '../ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import { act } from 'react-dom/test-utils';

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <ThemeContext>{children}</ThemeContext>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  };

describe('Sider Component', () => {
    it('should render Sider Component with options', () => {
        const options = ['Tenses', 'Grammar Levels', 'Dictionary', 'Releases'];
        render(<ApplicationProviders><SiderComponent /></ApplicationProviders>);
        expect(screen.getByTestId('sider-menu')).toBeInTheDocument();
        options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
    });

    it('should have company logo', () => {
        render(<ApplicationProviders><SiderComponent /></ApplicationProviders>);
        expect(screen.getByRole('link').getAttribute('href')).toBe('/');
        expect(screen.getByTestId('company-white').getAttribute('src')).toBe('white.svg');
    });

    it('should trigger sider footer', () => {
        render(<ApplicationProviders><SiderComponent /></ApplicationProviders>)
        const siderTrigger = screen.getByTestId('sider-menu').querySelector('.ant-layout-sider-trigger');
        expect(siderTrigger?.querySelector('.anticon')).toBeInTheDocument();
        expect(siderTrigger?.querySelector('.anticon')?.getAttribute('aria-label')).toBe('left');
        act(() => fireEvent.click(screen.getByTestId('sider-menu').querySelector('.ant-layout-sider-trigger') as HTMLElement));
        expect(siderTrigger?.querySelector('.anticon')?.getAttribute('aria-label')).toBe('right');
    });
})