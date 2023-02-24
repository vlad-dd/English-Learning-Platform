import { get } from "lodash";
import { useContext } from "react";
import { TenseContext } from "../../../Context";

export const usePracticeData = () => {

    const { configuration: { practice } } = useContext(TenseContext);

    const sentences = get(practice, '[0].sentences');

    return { sentences };
}