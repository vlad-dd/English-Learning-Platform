import React from "react";
import { AlertOutlined } from "@ant-design/icons";
import { TenseContext } from "../Context";
import { useConfiguration } from "../../Hooks";
import { ApplicationTitle, BreadcrumbPath, SectionComments } from "../../Сommon";
import { ContentSection, StyledAlert } from "../styled";
import TensesTable from "../Table/tenses-table";
import TensePractice from "../Carousel/presentational";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";
import { compact, get } from "lodash";
import { useTenseConfiguration } from "./use-tense-configuration";

const TenseContent = (): JSX.Element | null => {
  // const { renderApplicationGate, extractValueByPath, isLoading, error, refetch } = useConfiguration(TenseContext);
  const { data, loading, error, refetch} = useTenseConfiguration();
  const renderApplicationGate = () => !!data && !loading && !error;
  // const configuration = extractValueByPath('countOfTenses[0]');
  const configuration = get(data, 'countOfTenses[0]');
  const path = compact(window.location.pathname.split('/'));

  return (
    <>
      <BreadcrumbPath />
      {renderApplicationGate() && (
        <ContentSection>
          <ApplicationTitle>{configuration.tense}</ApplicationTitle>
          <StyledAlert icon={<AlertOutlined />} message={configuration.tableData.tip} showIcon />
          <TensesTable table={configuration.tableData.table} />
          <MostCommonCases tense={configuration.tense} cases={configuration.cases} />
          <TenseExamplePanels examples={configuration.examples} />
          <TensePractice />
          <SectionComments renderComments={configuration.comments} refetch={refetch} path1={path[2]} path2={path[2]}/>
        </ContentSection>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>We have some troubles with request...</div>}
    </>
  );
};

export default TenseContent;
