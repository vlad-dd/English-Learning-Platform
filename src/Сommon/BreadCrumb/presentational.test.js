import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../store';
import BreadCrumbPath from '.';

describe('BreadCrumb', () => {
  it('should map breadcrumb items', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BreadCrumbPath mode="tenses" />
      </Provider>
    );
    expect(getByRole('navigation')).toBeInTheDocument();
  });
});
