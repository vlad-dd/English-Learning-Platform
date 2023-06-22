import { IApplicationTitle } from "./types";
import { StyledApplicationTitle } from "./styled";

const ApplicationTitle = ({ children }: IApplicationTitle) => {
    return (
        <StyledApplicationTitle>
            {children}
        </StyledApplicationTitle>
    )
}

export default ApplicationTitle;