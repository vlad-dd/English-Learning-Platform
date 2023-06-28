import { TextField } from "@mui/material";
import { useSearchInputWidget } from "../use-search-input-widget";
import { HEADER_AUTOCOMPLETE_DATA_TEST_ID } from "../../constants";
import { StyledAutoComplete } from "../../styled";

const SearchInput = () => {
    
    const { transformedOptions, setSelectedValue } = useSearchInputWidget();

    return (
        <StyledAutoComplete
            data-testid={HEADER_AUTOCOMPLETE_DATA_TEST_ID}
            onChange={(e, elem) => setSelectedValue(elem)}
            options={transformedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={({ firstLetter }: any) => firstLetter}
            getOptionLabel={({ title }: any) => title}
            renderInput={(params) => <TextField {...params} />}
        />
    )
}

export default SearchInput;