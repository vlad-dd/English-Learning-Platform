import React, { useContext } from "react";
import { Alert } from 'antd';
import { get } from "lodash";
import SearchInput from "./components/SearchInput";
import { DictionaryConfigurationContext } from "./Context";
import AudioPlayer from "./components/AudioPlayer";
import Meanings from "./components/Meanings";
import { DictionaryWrapper, DictionaryContent } from "./styled";
import { ContentSection } from "../Tenses/styled";

const Dictionary = () => {
  const { data, isLoading } = useContext(DictionaryConfigurationContext);

  const wordFromDictionary = get(data, "dictionary[0]");

  return (
      <ContentSection data-testid="content-section-wrapper">
        <DictionaryWrapper data-testid="dictionary-wrapper">
          <Alert message="Tip: You can`t search phrases here, only single words." type="info" showIcon />
          <SearchInput />
          {!!wordFromDictionary && !isLoading && (
            <DictionaryContent>
              <Meanings />
              <AudioPlayer />
            </DictionaryContent>
          )}
          <div>{isLoading && <div>Loading...</div>}</div>
        </DictionaryWrapper>
      </ContentSection>
  );
};

export default Dictionary;
