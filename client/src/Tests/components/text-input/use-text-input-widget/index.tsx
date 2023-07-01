import { useContext } from "react";
import { TestContext } from "../../../Context";
import { extractByPath } from "../../../../utils/utils";

export const useTextInputWidget = () => {
    const { data } = useContext(TestContext)!;
    const { config } = extractByPath(data, 'getTests[0]')

    return {
        config
    }
}