import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { IErrorDefition } from "../../../types";
import { ERROR_PAGE } from "../../../../../translations/constants";
import { NAVIGATION_PATHS } from "../../../constants";
import {
    ErrorDefinitionWarning,
    ErrorDefinitonWrapper,
    StyledError,
    StyledHomeButton
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
                <StyledHomeButton>
                    <FormattedMessage id={ERROR_PAGE.ERROR_PAGE_HOME_BUTTON} />
                </StyledHomeButton>
            </Link>
        </ErrorDefinitonWrapper>
    )
}

export default NotFoundURLErrorDefiniton;