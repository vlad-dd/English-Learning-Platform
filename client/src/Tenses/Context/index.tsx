import { get } from "lodash";
import React, { createContext } from "react";
import { useTenseConfiguration } from "../Main/use-tense-configuration";

export const TenseContext = createContext<any>(null);


const TenseContextRoot = ({ children }: { children: JSX.Element }) => {

    const { data, loading, error } = useTenseConfiguration();

    return (
        <TenseContext.Provider value={{ data, isLoading: loading, error }}>
            {children}
        </TenseContext.Provider>
    )

}

export default TenseContextRoot;