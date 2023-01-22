import React, { createContext } from "react";
import { Alert } from "antd";
import { AlertOutlined } from "@ant-design/icons";
import { get } from "lodash";
import { BreadcrumbPath } from "../../Сommon";
import { ContentSection } from "../styled";
import TensesTable from "../Table/tenses-table";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";
import TensePractice from "../Carousel/carousel-practice";
import { IPracticeSentence } from "../types";
import { useTenseConfiguration } from "./use-tense-configuration";

export const ResponseContext = createContext<IPracticeSentence | object>({});

const TenseContent = (): JSX.Element | null => {

  const { data, loading, error } = useTenseConfiguration();

  console.log('data, loading, error: ', data, loading, error)

  if (data && !loading && !error) {
    const {
      tense,
      tableData: { tip, table },
      cases,
      examples,
      practice,
    } = get(data?.countOfTenses, "[0]");

    const practiceConfiguration = get(practice, "[0].sentences");

    return (
      <>
        <BreadcrumbPath />
        <ContentSection>
          <h1 style={{ fontSize: "2.5rem" }}>{tense}</h1>
          <Alert icon={<AlertOutlined />} message={tip} showIcon />
          <TensesTable table={table} />
          <MostCommonCases tense={tense} cases={cases} />
          <TenseExamplePanels examples={examples} />
          <ResponseContext.Provider value={practiceConfiguration}>
            <TensePractice />
          </ResponseContext.Provider>
        </ContentSection>
      </>
    );
  } else if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>We have some troubles with request...</h1>;
  }
  return null;
};

export default TenseContent;
