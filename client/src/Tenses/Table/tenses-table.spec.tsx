import React from 'react';
import { render, screen } from '@testing-library/react';
import TensesTable from './tenses-table';
import { withIntlProvider } from '../../test-utils/hocs';

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

const TensesTableWithProvider = withIntlProvider(TensesTable);

describe('TensesTable', () => { 
    it('should render TensesTable', () => {
        render(<TensesTableWithProvider table={tableMock} />);
        tableInnerHTML.forEach((innerHTML) => expect(screen.getByText(innerHTML)).toBeInTheDocument())
    });
 })