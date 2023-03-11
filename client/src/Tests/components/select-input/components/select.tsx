import React, { useLayoutEffect, useState } from "react";
import { Select } from 'antd';
import { size } from "lodash";
import { BORDERS, SELECT_INPUT_ID } from "../../constants";
import { focusNodeAfterMounting } from "../../../utils";

interface ISelectInput {
    index: any
    correctAnswer: any
    options: any
    handleChange: any
    selectedOptions: any
}

const SelectInput = ({ index, correctAnswer, options, handleChange, selectedOptions }: ISelectInput) => {

    useLayoutEffect(() => {
        focusNodeAfterMounting(SELECT_INPUT_ID);
    }, []);

    return (
        <Select
            id={SELECT_INPUT_ID}
            style={{ width: 120, border: size(selectedOptions) ? BORDERS[selectedOptions[index]] : null }}
            onChange={(value) => handleChange(value, correctAnswer, index)}
            options={options}
        />
    )
}

export default SelectInput;