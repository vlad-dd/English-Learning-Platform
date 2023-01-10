import React, { createContext } from 'react';
import { Alert } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import * as selectors from '../../../store/selectors';
import { BreadcrumbPath } from '../../../Сommon';
import { ContentSection } from './styled';
import TensesTable from './tenses-table';
import MostCommonCases from './cases-tabs';
import TenseExamplePanels from './example-panels';
import TensePractice from './carousel-practice';
import { useDatabase } from '../../../Hooks';
import { useSelector } from 'react-redux';
import { convertToArrayOfObjects } from '../../../helpers';
import { COLUMNS } from '../../constants';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const ResponseContext = createContext<any>(null);

const TenseContent = () => {

  const { path } = useSelector(selectors.tensesBCState);

  const { isLoading, requestError } = useDatabase(path[path.length - 1])

  const info = useSelector(selectors.tenseConfiguration);

  if(info.length && !isLoading && !requestError) {
    const  { tense, tableData: { tip, table }, practice, cases } = info[0];

    return ( 
      <ResponseContext.Provider value={practice}>
      <BreadcrumbPath mode="tenses" />
     <ContentSection>
       <Alert icon={<AlertOutlined />} message={tip} showIcon /> 
       <TensesTable columns={COLUMNS} table={convertToArrayOfObjects(table)} />
       <MostCommonCases tense={tense} cases={convertToArrayOfObjects(cases)} /> 
       <TenseExamplePanels />
       <TensePractice />
     </ContentSection> 
  </ResponseContext.Provider>
  );
  } else {
    return <h1>Loading...</h1>
  }
};

export default TenseContent;
