import React, { useEffect, useState } from "react";
import { noop, size } from "lodash";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { StyledAutoComplete } from "../../styled";
import { APPLICATION_PARTS } from "../../constants";

const SearchInput = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');

    const transformedOptions = APPLICATION_PARTS.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    useEffect(() => {
          //@ts-ignore
        if (size(selectedValue) > 0) {
              //@ts-ignore
            navigate(selectedValue.path)
        } else {
            noop()
        }
    }, [selectedValue])

    return (
        <StyledAutoComplete
            data-testid="header-autocomplete"
            style={{ width: '35vw' }}
            //@ts-ignore
            onChange={(e, elem) => setSelectedValue(elem)}
            options={transformedOptions.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            //@ts-ignore
            groupBy={(option) => option.firstLetter}
            //@ts-ignore
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} />}
        />
    )
}

export default SearchInput;