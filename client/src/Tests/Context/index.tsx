import React, { createContext } from "react";
import { ITestContext } from "../types";
import { useTestConfiguration } from "../use-test-configuration";

export const TestContext = createContext<ITestContext | null>(null);

const TestApplicationContext = ({ children }: { children: JSX.Element }) => {
    const { data, isLoading, error } = useTestConfiguration();

    return (
        <TestContext.Provider value={{ data, isLoading, error }}>
            {children}
        </TestContext.Provider>
    )
}

export default TestApplicationContext;