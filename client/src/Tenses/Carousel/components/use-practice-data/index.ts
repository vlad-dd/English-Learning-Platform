import { get } from "lodash";
import { useContext } from "react";
import { useConfiguration } from "../../../../Hooks";
import { TenseContext } from "../../../Context";

export const usePracticeData = () => {

    const { extractValueByPath } = useConfiguration(TenseContext);

    const { practice } = extractValueByPath('countOfTenses[0]');
    
    const sentences = get(practice, '[0].sentences');

    return { sentences };
}