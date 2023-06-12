import { AlertOutlined } from "@ant-design/icons";
import { useParams } from "react-router";
import { size } from "lodash";
import { ApplicationTitle, BreadcrumbPath, LoadingProgress, SectionComments } from "../../Сommon";
import ErrorPage from "../../Сommon/error-handler-page/not-found-url";
import { ELP_USER_EXPERIENCE_ERRORS } from "../../Сommon/error-handler-page/constants";
import { extractByPath } from "../../utils/utils";
import { TenseContext } from "../Context";
import { useTenseConfigurationWidget } from "./use-tense-configuration";
import TensesTable from "../Table/tenses-table";
import TensePractice from "../Carousel/presentational";
import MostCommonCases from "../Cases/cases-tabs";
import TenseExamplePanels from "../Examples/example-panels";
import { ContentSection, StyledAlert } from "../styled";

const TenseContent = (): JSX.Element => {
  const { tense } = useParams();
  const { data, loading, error, refetch } = useTenseConfigurationWidget();
  const { tense: verb, tableData, cases, examples, comments } = extractByPath(data, 'countOfTenses[0]') || {};

  if ((loading || !size(data)) && !error) {
    return <LoadingProgress />
  }

  if (!window.navigator.onLine) {
    return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION} />
  }

  if (error) {
    if (error.networkError) {
      return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR} />
    } else {
      return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.UNEXPECTED_BREAK} />
    }
  }

  return (
    <>
      <BreadcrumbPath />
      <ContentSection>
        <ApplicationTitle>{verb}</ApplicationTitle>
        <StyledAlert icon={<AlertOutlined />} message={tableData.tip} showIcon />
        <TensesTable table={tableData.table} />
        <MostCommonCases tense={verb} cases={cases} />
        <TenseExamplePanels examples={examples} />
        <TenseContext.Provider value={{ data, isLoading: loading, error }}>
          <TensePractice />
        </TenseContext.Provider>
        <SectionComments renderComments={comments} refetch={refetch} collection={tense!} document={tense!} />
      </ContentSection>
    </>
  );
};

export default TenseContent;
