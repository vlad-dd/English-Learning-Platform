import { Alert } from 'antd';
import SearchInput from "./components/SearchInput";
import { DictionaryConfigurationContext } from "./Context";
import { LoadingProgress } from '../Сommon';
import { useConfigurationWidget } from "../Hooks";
import AudioPlayer from "./components/AudioPlayer";
import Meanings from "./components/Meanings";
import { DictionaryWrapper, DictionaryContent } from "./styled";
import { ContentSection } from "../Tenses/styled";

const Dictionary = () => {
  const { renderApplicationGate, isLoading, error } = useConfigurationWidget(DictionaryConfigurationContext);

  return (
      <ContentSection data-testid="content-section-wrapper">
        <DictionaryWrapper data-testid="dictionary-wrapper">
          <Alert message="Tip: You can`t search phrases here, only single words." type="info" showIcon />
          <SearchInput />
          {renderApplicationGate() && (
            <DictionaryContent>
              <Meanings />
              <AudioPlayer />
            </DictionaryContent>
          )}
          {isLoading && <LoadingProgress />}
          <div>{error && <div>We have some troubles with your request...</div>}</div>
        </DictionaryWrapper>
      </ContentSection>
  );
};

export default Dictionary;
