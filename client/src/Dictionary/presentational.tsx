import { Alert, Empty } from 'antd';
import { FormattedMessage } from 'react-intl';
import { LoadingProgress } from '../Сommon';
import ErrorPage from '../Сommon/error-handler-page/not-found-url';
import { APOLLO_GRAPHQL_ERRORS, ELP_USER_EXPERIENCE_ERRORS } from '../Сommon/error-handler-page/constants';
import { useConfigurationWidget } from "../Hooks";
import { DictionaryConfigurationContext } from "./Context";
import SearchInput from "./components/SearchInput";
import AudioPlayer from "./components/AudioPlayer";
import Meanings from "./components/Meanings";
import { CONTENT_SECTION_WRAPPER_DATA_TEST_ID, DICTIONARY_TIP_ID, DICTIONARY_WRAPPER_DATA_TEST_ID, ERROR_EMPTY_SPACE_DATA_TEST_ID, UNEXISTED_WORD_ID } from './constants';
import { ContentSection } from "../Tenses/styled";
import { DictionaryWrapper, DictionaryContent, StyledDictionaryErrorContainer, StyledServerError } from "./styled";

const Dictionary = () => {
  const { renderApplicationGate, isLoading, error } = useConfigurationWidget(DictionaryConfigurationContext);

  return (
    <ContentSection data-testid={CONTENT_SECTION_WRAPPER_DATA_TEST_ID}>
      <DictionaryWrapper data-testid={DICTIONARY_WRAPPER_DATA_TEST_ID}>
        <Alert message={<FormattedMessage id={DICTIONARY_TIP_ID} />} type="info" showIcon />
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
                data-testid={ERROR_EMPTY_SPACE_DATA_TEST_ID}
                description={<FormattedMessage id={UNEXISTED_WORD_ID} />}
                imageStyle={{ height: "40vh" }}
              />
              :
              <StyledServerError>{ELP_USER_EXPERIENCE_ERRORS.SERVER_ERROR}</StyledServerError>
          )}
        </StyledDictionaryErrorContainer>
      </DictionaryWrapper>
    </ContentSection>
  );
};

export default Dictionary;
