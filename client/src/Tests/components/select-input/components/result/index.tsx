import { size } from "lodash";
import { Image } from "../../../../../Сommon";
import { IAnswerResult } from "../../../../types";
import { CORRECT_ANSWER_URL, INCORRECT_ANSWER_URL } from "../../../../constants";
import {
    StyledAnswersContainer,
    StyledAnswerResultWrapper,
    StyledAnswer
} from "../../styled";

const AnswerResult = ({ index, selectedOptions }: IAnswerResult) => {
    const isVisible = size(selectedOptions) > 0 && (selectedOptions[index] === 1 || selectedOptions[index] === 0);
    return (
        <StyledAnswerResultWrapper>
            {isVisible && (selectedOptions[index] === 1 ?
                <StyledAnswersContainer>
                    <StyledAnswer>Correct </StyledAnswer>
                    <Image styles={{ height: "15px" }} url={CORRECT_ANSWER_URL} />
                </StyledAnswersContainer>
                :
                <StyledAnswersContainer>
                    <StyledAnswer>Incorrect </StyledAnswer>
                    <Image styles={{ height: "15px" }} url={INCORRECT_ANSWER_URL} />
                </StyledAnswersContainer>)
            }
        </StyledAnswerResultWrapper>
    )
}

export default AnswerResult;