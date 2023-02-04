import React from 'react';
import { render, screen } from '@testing-library/react';
import TensesTable from './tenses-table';

const tableMock = [
    {
      key: "1",
      type: "Affirmative",
      noun: "I/You/We/They",
      auxiliar: "Do",
      noun_1: "He/She/It",
      auxiliar_1: "Does",
    },
  ];

  const tableInnerHTML = [
    'Sentence building',
    'Affirmative',
    'I/You/We/They',
    'Do',
    'He/She/It',
    'Does'
]

describe('TensesTable', () => { 
    it('should render TensesTable', () => {
        render(<TensesTable table={tableMock} />);
        tableInnerHTML.forEach((innerHTML) => expect(screen.getByText(innerHTML)).toBeInTheDocument())
    });
 })