import React, { createContext } from 'react';
import { Alert } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import { get } from 'lodash';
import { BreadcrumbPath } from '../../../Сommon';
import { ContentSection } from './styled';
import TensesTable from './tenses-table';
import MostCommonCases from './cases-tabs';
import TenseExamplePanels from './example-panels';
import TensePractice from './carousel-practice';
import { convertToArrayOfObjects } from '../../../helpers';
import { IPracticeSentence } from '../../types';
import { useTenseConfiguration } from './use-tense-configuration';

export const ResponseContext = createContext<IPracticeSentence | object>({});

const TenseContent = () => {

  const { configuration, isLoading, requestError } = useTenseConfiguration();

  if(configuration.length && !isLoading && !requestError) {

    const  { tense, tableData: { tip, table }, practice, cases } = configuration[0];

    const practiceConfiguration = get(practice, '[0].sentences');

    return ( 
    <>
     <BreadcrumbPath mode="tenses" />
     <ContentSection>
       <Alert icon={<AlertOutlined />} message={tip} showIcon /> 
       <TensesTable table={convertToArrayOfObjects(table)} />
       <MostCommonCases tense={tense} cases={convertToArrayOfObjects(cases)} /> 
       <TenseExamplePanels />
       <ResponseContext.Provider value={practiceConfiguration}>
       <TensePractice />
       </ResponseContext.Provider> 
     </ContentSection>  
    </>
  );
  } else if(requestError) {
    return <h1>We have some troubles with request...</h1>

  }
   else {
    return <h1>Loading...</h1>
  }
};

export default TenseContent;
