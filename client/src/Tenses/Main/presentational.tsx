import React from "react";
import { AlertOutlined } from "@ant-design/icons";
import { useParams } from "react-router";
import { get } from "lodash";
import { TenseContext } from "../Context";
import { ApplicationTitle, BreadcrumbPath, SectionComments } from "../../Сommon";
import { ContentSection, StyledAlert } from "../styled";
import TensesTable from "../Table/tenses-table";
import TensePractice from "../Carousel/presentational";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";
import { useTenseConfigurationWidget } from "./use-tense-configuration";

const TenseContent = (): JSX.Element => {
  const { tense } = useParams();
  const { data, loading, error, refetch} = useTenseConfigurationWidget();
  const renderApplicationGate = () => !!data && !loading && !error;
  const configuration = get(data, 'countOfTenses[0]');

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
           <TenseContext.Provider value={{data, isLoading: loading, error}}>
            <TensePractice />
           </TenseContext.Provider>
          <SectionComments renderComments={configuration.comments} refetch={refetch} collection={tense!} document={tense!}/>
        </ContentSection>
      )}
      {loading && <div>Loading...</div>}
      {error && <div>We have some troubles with request...</div>}
    </>
  );
};

export default TenseContent;
