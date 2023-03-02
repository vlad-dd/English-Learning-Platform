import React from "react";
import { StyledApplicationTitle } from "./styled";

const ApplicationTitle = ({ children }: { children: any }) => {
    return (
        <StyledApplicationTitle>
            {children}
        </StyledApplicationTitle>
    )
}

export default ApplicationTitle;