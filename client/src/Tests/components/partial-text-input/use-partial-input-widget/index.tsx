import { useContext, useState } from "react";
import { extractByPath } from "../../../../utils/utils";
import { TestContext } from "../../../Context";

export const usePartialInputWidget = () => {
    const { data } = useContext(TestContext)!;
    const { config } = extractByPath(data, 'getTests[0]');
    const [answerToSubmit, setAnswerToSubmit] = useState<string>('');

    return {
        config,
        answerToSubmit,
        setAnswerToSubmit
    }
};