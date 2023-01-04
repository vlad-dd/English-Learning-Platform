import React, { createContext } from 'react';
import { Alert } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import { BreadcrumbPath } from '../../../../Сommon';
import { ContentSection } from './styled';
import TensesTable from './tenses-table';
import { useTensesConfiguration } from './use-tenses-configuration';
import MostCommonCases from './cases-tabs';
import TenseExamplePanels from './example-panels';
import TensePractice from './carousel-practice';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const ResponseContext = createContext<any>(null);

/* eslint-disable  @typescript-eslint/no-explicit-any */
const TenseContent: React.FC<{ configuration: any }> = ({ configuration = [] }) => {

  const { columns, table, tip, practice, cases, tense } = useTensesConfiguration(configuration);

  const translationData = {
    practice
  };

  return (
    <ResponseContext.Provider value={translationData}>
      <BreadcrumbPath mode="tenses" />
      <ContentSection>
        <Alert icon={<AlertOutlined />} message={tip} showIcon />
        <TensesTable columns={columns} table={table} />
        <MostCommonCases tense={tense} cases={cases} />
        <TenseExamplePanels configuration={configuration} />
        <TensePractice />
      </ContentSection>
    </ResponseContext.Provider>
  );
};

export default TenseContent;
