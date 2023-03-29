import { get } from "lodash";
import { useContext } from "react";

function useConfiguration<T extends React.Context<any>> (Context: T){

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