import SVGAstronaut from "./components/svg-astronaut";
import NotFoundURLErrorDefiniton from "./components/error-definition";
import { IErrorDefition } from "../types";
import { ERROR_PAGE_DATA_TEST_ID, NOT_FOUND_URL_CONTAINER_CLASSNAME } from "../constants";
import { StyledNotFoundURLContainer, StyledNotFoundURLRow } from "./styled";
import './index.css'

const ErrorPage = ({ error }: IErrorDefition) => {
    return (
        <StyledNotFoundURLContainer
            className={NOT_FOUND_URL_CONTAINER_CLASSNAME}
            data-testid={ERROR_PAGE_DATA_TEST_ID}
        >
            <StyledNotFoundURLRow>
                <SVGAstronaut />
                <NotFoundURLErrorDefiniton error={error} />
            </StyledNotFoundURLRow>
        </StyledNotFoundURLContainer>
    )
};

export default ErrorPage;