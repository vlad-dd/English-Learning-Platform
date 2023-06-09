import { useLayoutEffect } from "react";
import { Select } from 'antd';
import { size } from "lodash";
import { BORDERS, SELECT_INPUT_ID } from "../../../../constants";
import { focusNodeAfterMounting } from "../../../../../utils/utils";
import { ISelect } from "../../../../types";

const SelectInput = ({ index, correctAnswer, options, handleChange, selectedOptions }: ISelect) => {

    useLayoutEffect(() => {
        focusNodeAfterMounting(SELECT_INPUT_ID);
    }, []);

    return (
        <Select
            id={SELECT_INPUT_ID}
            data-testid={SELECT_INPUT_ID}
            style={{ width: 120, border: size(selectedOptions) ? BORDERS[selectedOptions[index]] : null }}
            onChange={(value) => handleChange(value, correctAnswer, index)}
            options={options}
        />
    )
}

export default SelectInput;