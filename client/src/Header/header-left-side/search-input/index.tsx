import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compact, noop, size } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { breadcrumbPath } from "../../../store/reducers/bread-crumb";
import * as selectors from '../../../store/selectors'
import { APPLICATION_PARTS } from "../../constants";
import { StyledAutoComplete } from "../../styled";

const SearchInput = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [selectedValue, setSelectedValue] = useState('');
    const { path } = useSelector(selectors.tensesBCState);

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

    useEffect(() => {
        const URLPath = [...compact(pathname.split("/"))].reverse();
        if(path.at(0) !== URLPath.at(0)) {
            dispatch(breadcrumbPath(URLPath))
        }
    }, [pathname, path])

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