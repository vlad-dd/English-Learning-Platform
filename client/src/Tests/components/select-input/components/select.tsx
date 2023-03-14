import React, { useLayoutEffect } from "react";
import { Select } from 'antd';
import { size } from "lodash";
import { BORDERS, SELECT_INPUT_ID } from "../../constants";
import { focusNodeAfterMounting } from "../../../utils";

interface ISelect {
    index: number
    correctAnswer: string
    options: Array<{ value: string, label: string }>
    handleChange: (value: string, correctAnswer: string, index: number) => void
    selectedOptions: { [key: number]: boolean }
}

const SelectInput = ({ index, correctAnswer, options, handleChange, selectedOptions }: ISelect) => {

    useLayoutEffect(() => {
        focusNodeAfterMounting(SELECT_INPUT_ID);
    }, []);

    return (
        <Select
            id={SELECT_INPUT_ID}
            //@ts-ignore
            style={{ width: 120, border: size(selectedOptions) ? BORDERS[selectedOptions[index]] : null }}
            onChange={(value) => handleChange(value, correctAnswer, index)}
            options={options}
        />
    )
}

export default SelectInput;