import { FormattedMessage } from "react-intl";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DICTIONARY_PAGE } from "../../../translations/constants";
import { useSearchInputWidget } from "./use-search-input-widget";
import { DICTIONARY_SEARCH_BUTTON_DATA_TEST_ID, DICTIONARY_SEARCH_INPUT_DATA_TEST_ID, DICTIONARY_SEARCH_INPUT_PLACEHOLDER } from "../../constants";
import { StyledSpace, StyledSearch } from './styled';

const SearchInput = () => {

  const { toSearch, isLoading, setToSearch, searchWordInDictionary } = useSearchInputWidget();

  return (
    <StyledSpace direction="vertical">
      <StyledSearch
        data-testid={DICTIONARY_SEARCH_INPUT_DATA_TEST_ID}
        placeholder={DICTIONARY_SEARCH_INPUT_PLACEHOLDER}
        allowClear
        value={toSearch}
        onKeyDown={({ key }) => {
          if (key === 'Enter') searchWordInDictionary({ variables: { word: toSearch } })
        }}
        enterButton={
          <Button
            data-testid={DICTIONARY_SEARCH_BUTTON_DATA_TEST_ID}
            loading={isLoading}
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => searchWordInDictionary({ variables: { word: toSearch } })}
          >
            <FormattedMessage id={DICTIONARY_PAGE.SEARCH_BUTTON} />
          </Button>
        }
        size="large"
        onChange={({ target: { value } }) => setToSearch(value)}
      />
    </StyledSpace>
  );
};

export default SearchInput;
