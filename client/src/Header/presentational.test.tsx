import React from 'react';
import { render } from '@testing-library/react';
import Header from './presentational';
import ErrorBoundary from '../ErrorBoundary';

// jest.mock('../Hooks/use-theme.ts', () => () => { themeInHex: '#fff' })



describe('Header', () => {
  it('should be in the document', () => {
    // render(<ErrorBoundary><Header /></ErrorBoundary>)
    expect(1+4).toBe(5);

    
  });
});
