import { FormattedMessage } from 'react-intl';
import { Title } from '../../Сommon';
import { IDataTable } from '../types';
import { COLUMNS, TABLE_TITLE_ID } from '../constants';
import { StyledTable, StyledTitle } from '../styled';

const TensesTable = ({ table }: { table: IDataTable[] }) => {
  return (
    <>
      <StyledTitle>
        <Title styles={{ paddingTop: '25px' }}>
          <FormattedMessage id={TABLE_TITLE_ID} />
        </Title>
      </StyledTitle>
      <StyledTable
        columns={COLUMNS}
        dataSource={table}
      />
    </>
  );
};

export default TensesTable;
