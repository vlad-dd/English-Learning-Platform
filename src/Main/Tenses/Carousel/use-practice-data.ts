import { get } from "lodash";
import { useContext } from "react";
import { convertToArrayOfObjects } from "../../../helpers";
import { ResponseContext } from "../TenseContent/presentational";

export const usePracticeData = () => {
    const practice = useContext(ResponseContext);

    const { sentences } = get(practice, '[0]');

    return { sentences: convertToArrayOfObjects(sentences) };
}