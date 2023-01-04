import React from 'react';
import { render } from '@testing-library/react';
import CarouselComponent from '.';

describe('CarouselComponent', () => {
    let data;
  const affirmative = [
    {
      id: 1,
      label: 'Affirmative',
      partOne: 'She',
      partTwo: 'her homework every evening.',
      missed: 'does',
    },
  ];

  const negative = [
    {
      id: 1,
      label: 'Negative',
      partOne: 'It',
      partTwo: 'her homework every evening.',
      missed: 'does not',
    },
  ];

  const question = [
    {
      id: 1,
      label: 'Question',
      partOne: 'it',
      partTwo: 'her homework every evening?',
      missed: 'Does',
    },
  ];


  it('should render affirmative as expected', () => {
    const { container, getByRole, getByTestId } = render(
      <CarouselComponent {...affirmative} />
    );
    expect(getByRole('textbox')).toBe(getByTestId('practice-input'));
  });

  it('should render negative as expected', () => {
    const { container, getByRole, getByTestId } = render(
      <CarouselComponent {...negative} />
    );
    expect(getByRole('textbox')).toBe(getByTestId('practice-input'));
  });
});
