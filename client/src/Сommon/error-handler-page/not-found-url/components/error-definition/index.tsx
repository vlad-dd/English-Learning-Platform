import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Button } from "@mui/material";
import { IErrorDefition } from "../../../types";
import { ERROR_PAGE } from "../../../../../translations/constants";
import { NAVIGATION_PATHS } from "../../../constants";
import {
    ErrorDefinitionWarning,
    ErrorDefinitonWrapper,
    StyledError
} from "../../styled";

const NotFoundURLErrorDefiniton = ({ error }: IErrorDefition) => {
    return (
        <ErrorDefinitonWrapper>
            <ErrorDefinitionWarning>
                <FormattedMessage id={ERROR_PAGE.TITLE} />
            </ErrorDefinitionWarning>
            <StyledError>
                {error}
            </StyledError>
            <Link to={NAVIGATION_PATHS.HOME}>
                <Button
                    style={{ border: "1px solid purple", color: "white", width: "8vw" }}
                >
                    <FormattedMessage id={ERROR_PAGE.ERROR_PAGE_HOME_BUTTON} />
                </Button>
            </Link>
        </ErrorDefinitonWrapper>
    )
}

export default NotFoundURLErrorDefiniton;