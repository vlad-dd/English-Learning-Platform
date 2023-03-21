
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "../../../Contexts";
import ErrorBoundary from "../../../ErrorBoundary";
import store from "../../../store";
import { TenseContext } from "../../Context";

const TenseApplicationProviders = ({ children, ownContextProps }: { children: JSX.Element, ownContextProps?: any }) => {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <ThemeContext>
                <TenseContext.Provider value={ownContextProps}>
                  {children}
                </TenseContext.Provider>
            </ThemeContext>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  };

export default TenseApplicationProviders;