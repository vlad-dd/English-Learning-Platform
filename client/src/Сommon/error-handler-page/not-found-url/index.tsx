import SVGAstronaut from "./components/svg-astronaut";
import NotFoundURLErrorDefiniton from "./components/error-definition";
import { StyledNotFoundURLContainer, StyledNotFoundURLRow } from "./styled";
import './index.css'

const ErrorPage = ({ error }: any) => {
    return (
        <StyledNotFoundURLContainer className="not-found-url-container" data-testid="error-page">
            <StyledNotFoundURLRow>
               <SVGAstronaut />
               <NotFoundURLErrorDefiniton error={error} />
            </StyledNotFoundURLRow>
        </StyledNotFoundURLContainer>
    )

}

export default ErrorPage;