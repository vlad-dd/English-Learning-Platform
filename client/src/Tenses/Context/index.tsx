import { get } from "lodash";
import React, { createContext } from "react";
import { useTenseConfiguration } from "../Main/use-tense-configuration";

export const TenseContext = createContext<any>(null);


const TenseContextRoot = ({ children }: { children: JSX.Element }) => {

    const { data, loading, error } = useTenseConfiguration();

    const configuration = get(data?.countOfTenses, '[0]');

    return (
        <TenseContext.Provider value={{ configuration, isLoading: loading, error }}>
            {children}
        </TenseContext.Provider>
    )

}

export default TenseContextRoot;