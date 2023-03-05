import React from "react";
import { StyledApplicationTitle } from "./styled";

const ApplicationTitle = ({ children }: { children: JSX.Element }) => {
    return (
        <StyledApplicationTitle>
            {children}
        </StyledApplicationTitle>
    )
}

export default ApplicationTitle;