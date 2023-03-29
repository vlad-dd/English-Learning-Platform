import React, { useContext } from "react";
import { Alert } from 'antd';
import { get } from "lodash";
import SearchInput from "./components/SearchInput";
import { DictionaryConfigurationContext } from "./Context";
import AudioPlayer from "./components/AudioPlayer";
import Meanings from "./components/Meanings";
import { DictionaryWrapper, DictionaryContent } from "./styled";
import { ContentSection } from "../Tenses/styled";
import { useConfiguration } from "../Hooks";

const Dictionary = () => {
  const { renderApplicationGate, isLoading, error} = useConfiguration(DictionaryConfigurationContext);

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
          <div>{isLoading && <div>Loading...</div>}</div>
          <div>{error && <div>We have some troubles with your request...</div>}</div>
        </DictionaryWrapper>
      </ContentSection>
  );
};

export default Dictionary;
