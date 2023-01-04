import React from 'react';
import { Table } from 'antd';
import { Title } from '../../../../Сommon';
import { StyledTitle } from './styled';

const TensesTable = ({ columns, table }: any) => {
  return (
    <>
      <StyledTitle>
        <Title>Sentence building</Title>
      </StyledTitle>
      <Table
        columns={columns}
        dataSource={table}
        style={{ paddingBottom: '25px' }}
      />
    </>
  );
};

export default TensesTable;
