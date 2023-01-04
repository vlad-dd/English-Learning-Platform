import { get } from "lodash";
import { useContext } from "react";
import { ResponseContext } from "../../../Body/TenseContent/presentational";

export const usePracticeData = () => {
    const { practice } = useContext(ResponseContext);

    const { sentences } = get(practice, '[0]');

    return { sentences }
}