import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { compact, noop, size } from "lodash";
import * as selectors from "../../../store/selectors";
import { breadcrumbPath } from "../../../store/reducers/bread-crumb";
import { APPLICATION_PARTS } from "../../constants";

export const useSearchInputWidget = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [selectedValue, setSelectedValue] = useState<any>(null);
    const { path } = useSelector(selectors.tensesBCState);

    const transformedOptions = APPLICATION_PARTS.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    useEffect(() => {
        if (!!size(selectedValue)) {
            navigate(selectedValue.path)
        } else {
            noop()
        }
    }, [selectedValue])

    useEffect(() => {
        const URLPath = [...compact(pathname.split("/"))].reverse();
        if (path.at(0) !== URLPath.at(0)) {
            dispatch(breadcrumbPath(URLPath))
        }
    }, [pathname, path]);

    return { 
        transformedOptions,
        setSelectedValue
     };

};