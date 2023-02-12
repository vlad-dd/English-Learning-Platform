import React, { useContext, useState } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DictionaryConfigurationContext } from "../../Context";
import { StyledSpace, StyledSearch } from './styled';

const SearchInput = () => {

  const [toSearch, setToSearch] = useState<string>('');

  const { searchWordInDictionary, isLoading } = useContext(DictionaryConfigurationContext)

  return (
    <StyledSpace direction="vertical">
      <StyledSearch
        data-testid="dictionary-search-input"
        placeholder="Search word..."
        allowClear
        value={toSearch}
        onKeyDown={({ key }) => {
            if (key === 'Enter') searchWordInDictionary({ variables: { word: toSearch } })
        }}
        enterButton={
          <Button
            data-testid="dictionary-search-button"
            loading={isLoading}
            type="primary"
            icon={<SearchOutlined />}
            onClick={() =>
                searchWordInDictionary({ variables: { word: toSearch } })
            }
          >
            Search
          </Button>
        }
        size="large"
        onChange={(e) => setToSearch(e.target.value)}
      />
    </StyledSpace>
  );
};

export default SearchInput;
