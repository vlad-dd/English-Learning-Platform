import { get } from "lodash";
import { useConfigurationWidget } from "../../../../Hooks";
import { TenseContext } from "../../../Context";

export const usePracticeData = () => {

    const { extractValueByPath } = useConfigurationWidget(TenseContext);

    const { practice } = extractValueByPath('countOfTenses[0]');
    
    const sentences = get(practice, '[0].sentences');

    return { sentences };
}