import { StyledApplicationTitle } from "./styled";

const ApplicationTitle = ({ children }: { children: JSX.Element | string }) => {
    return (
        <StyledApplicationTitle>
            {children}
        </StyledApplicationTitle>
    )
}

export default ApplicationTitle;