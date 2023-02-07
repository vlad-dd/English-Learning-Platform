import { useContext } from "react";
import { convertToArrayOfObjects } from "../../../../helpers";
import { ResponseContext } from "../../../Main/presentational";

export const usePracticeData = () => {
    const practiceSentences = useContext(ResponseContext);

    return { sentences: convertToArrayOfObjects(practiceSentences) };
}