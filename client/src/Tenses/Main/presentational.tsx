import React, { createContext, useContext } from "react";
import { Alert } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import { get } from "lodash";
import { BreadcrumbPath } from "../../Сommon";
import { ContentSection } from "../styled";
import TensesTable from "../Table/tenses-table";
import TensePractice from "../Carousel/presentational";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";
import { IPracticeSentence } from "../types";
import { useTenseConfiguration } from "./use-tense-configuration";
import { TenseContext } from "../Context";

// export const ResponseContext = createContext<IPracticeSentence | object>({});

const TenseContent = (): JSX.Element | null => {

  const { configuration, isLoading, error } = useContext(TenseContext);
  console.log('weAreHere: ', configuration, isLoading, error)

  // const { data, loading, error } = useTenseConfiguration();

  // if (data && !loading && !error) {
  //   const {
  //     tense,
  //     tableData: { tip, table },
  //     cases,
  //     examples,
  //     practice,
  //   } = get(data?.countOfTenses, "[0]");

  // const practiceConfiguration = get(practice, "[0].sentences");

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
              {/* <ResponseContext.Provider value={configuration.practice[0].sentences}> */}
                <TensePractice />
              {/* </ResponseContext.Provider> */}
        </ContentSection>

      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>We have some troubles with request...</div>}
    </>
  );
};

export default TenseContent;
