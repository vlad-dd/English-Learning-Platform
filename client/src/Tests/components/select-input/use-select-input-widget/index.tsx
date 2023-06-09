import { useContext, useState } from "react";
import { extractByPath } from "../../../../utils/utils";
import { TestContext } from "../../../Context";

export const useSelectInputWidget = () => {
    const { data } = useContext(TestContext)!;
    const { config } = extractByPath(data, 'getTests[0]');
    const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number }>({});

    const handleChange = (value: string, correctAnswer: string, index: number) => {
        setSelectedOptions((prevOptions: { [key: number]: number } | undefined) => ({
            ...prevOptions,
            [index]: (value === correctAnswer) ? 1 : 0
        }))
    };

    return {
        config,
        selectedOptions,
        handleChange
    }
};