/* eslint-disable no-undef */
import { ApolloError } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TenseContent from './presentational';
import * as Configutation from './use-tense-configuration';

jest.mock('./use-tense-configuration')

describe('TenseContent', () => {
  const useTenseMock = jest.spyOn(Configutation, 'useTenseConfiguration')
  beforeEach(() => {
    useTenseMock.mockClear();
    // useTenseMock.mockReturnValue({ data: {countOfTenses: [{tense: 'testIfItWorks'}]}, loading: false, error: false })

  })

  it('first', () => {
    render(<TenseContent />)
    expect(screen.getByText('sadf')).toBeInTheDocument();
});

})