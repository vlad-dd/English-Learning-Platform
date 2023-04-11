import { useContext } from "react";
import { get } from "lodash";


function useConfigurationWidget<T extends React.Context<any>> (Context: T){

    const { data, isLoading, error, refetch }: any = useContext(Context);

    const renderApplicationGate = (): boolean  => !!data && !isLoading && !error;

    const extractValueByPath = (path: string) => get(data, path);

    return {
        data,
        isLoading,
        error,
        refetch,
        renderApplicationGate,
        extractValueByPath
    }

}

export default useConfigurationWidget;