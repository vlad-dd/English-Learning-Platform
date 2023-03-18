import { get } from "lodash";
import React, { createContext } from "react";
import { ITestContext } from "../types";
import { useTestConfiguration } from "../use-test-configuration";

export const TestContext = createContext<ITestContext | null>(null);

const TestApplicationContext = ({ children }: { children: JSX.Element }) => {
    const { data, isLoading, error } = useTestConfiguration();
    const type = get(data, 'getTests[0].type');

    return (
        <TestContext.Provider value={{ data, type, isLoading, error }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestApplicationContext;