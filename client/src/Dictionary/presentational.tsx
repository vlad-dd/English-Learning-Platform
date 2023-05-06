import { Alert, Empty } from 'antd';
import SearchInput from "./components/SearchInput";
import { DictionaryConfigurationContext } from "./Context";
import { LoadingProgress } from '../Сommon';
import { useConfigurationWidget } from "../Hooks";
import AudioPlayer from "./components/AudioPlayer";
import Meanings from "./components/Meanings";
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { APOLLO_GRAPHQL_ERRORS, ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { DICTIONARY_TIP, UNEXISTED_WORD_DESCRIPTION } from './constants';
import { DictionaryWrapper, DictionaryContent, StyledDictionaryErrorContainer } from "./styled";
import { ContentSection } from "../Tenses/styled";

const Dictionary = () => {
  const { renderApplicationGate, isLoading, error } = useConfigurationWidget(DictionaryConfigurationContext);

  if (!window.navigator.onLine) {
    return <ErrorPage error={ELP_USER_EXPERIENCE_ERRORS.BAD_CONNECTION} />
  }

  return (
    <ContentSection data-testid="content-section-wrapper">
      <DictionaryWrapper data-testid="dictionary-wrapper">
        <Alert message={DICTIONARY_TIP} type="info" showIcon />
        <SearchInput />
        {renderApplicationGate() && (
          <DictionaryContent>
            <Meanings />
            <AudioPlayer />
          </DictionaryContent>
        )}
        {isLoading && <LoadingProgress />}
        <StyledDictionaryErrorContainer>
          {error && (
            error.message === APOLLO_GRAPHQL_ERRORS["REQUEST_FAILED_404"] ?
              <Empty
                description={UNEXISTED_WORD_DESCRIPTION}
                imageStyle={{ height: "40vh" }}
              />
              :
              <div>{ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR}</div>
          )}
        </StyledDictionaryErrorContainer>
      </DictionaryWrapper>
    </ContentSection>
  );
};

export default Dictionary;
