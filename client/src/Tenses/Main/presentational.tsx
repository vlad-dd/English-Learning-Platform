import React, { useContext } from "react";
import { Alert } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import { TenseContext } from "../Context";
import { BreadcrumbPath } from "../../Сommon";
import { ContentSection } from "../styled";
import TensesTable from "../Table/tenses-table";
import TensePractice from "../Carousel/presentational";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";


const TenseContent = (): JSX.Element | null => {

  const { configuration, isLoading, error } = useContext(TenseContext);

  return (
    <>
      <BreadcrumbPath />
      {configuration && (
        <ContentSection>
          <h1 style={{ fontSize: "2.5rem" }}>{configuration.tense}</h1>
          <Alert icon={<AlertOutlined />} message={configuration.tableData.tip} showIcon />
          <TensesTable table={configuration.tableData.table} />
          <MostCommonCases tense={configuration.tense} cases={configuration.cases} />
          <TenseExamplePanels examples={configuration.examples} />
          <TensePractice />
        </ContentSection>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>We have some troubles with request...</div>}
    </>
  );
};

export default TenseContent;
