import { get } from "lodash";
import { useContext } from "react";

const useConfiguration = (Context: React.Context<any>) => {

    const { data, isLoading, error}: any = useContext(Context);

    const renderApplicationGate = (): boolean  => !!data && !isLoading && !error;

    const extractValueByPath = (path: string) => get(data, path);

    return {
        data,
        isLoading,
        error,
        renderApplicationGate,
        extractValueByPath
    }

}

export default useConfiguration;