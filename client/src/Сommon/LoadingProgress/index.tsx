import { LOADING_PROGRESS_DATA_TEST_ID } from "./constants";
import { StyledCircularProgress } from "./styled";

const LoadingProgress = () => (
    <StyledCircularProgress
        data-testid={LOADING_PROGRESS_DATA_TEST_ID}
    />
)

export default LoadingProgress;