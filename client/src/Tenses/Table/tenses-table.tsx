import React from 'react';
import { Title } from '../../Сommon';
import { StyledTable, StyledTitle } from '../styled';
import { IDataTable } from '../types';
import { COLUMNS } from '../constants';

const TensesTable = ({ table }: { table: IDataTable[] }) => {
  return (
    <>
      <StyledTitle>
        <Title styles={{ paddingTop: '25px' }}>Sentence building</Title>
      </StyledTitle>
      <StyledTable
        columns={COLUMNS}
        dataSource={table}
      />
    </>
  );
};

export default TensesTable;
