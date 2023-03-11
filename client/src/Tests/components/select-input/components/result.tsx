import React from "react";
import { size } from "lodash";
import { Image } from "../../../../Сommon";
import { 
    StyledAnswersContainer, 
    StyledAnswerResultWrapper, 
    StyledAnswer 
} from "../styled";

interface IAnswerResult {
    index: any
    selectedOptions: any
}

const AnswerResult = ({ index, selectedOptions }: IAnswerResult) => {
    const isVisible = size(selectedOptions) > 0 && (selectedOptions[index] === true || selectedOptions[index] === false);
    return (
        <StyledAnswerResultWrapper>
            {isVisible && (selectedOptions[index] === true ?
                <StyledAnswersContainer>
                    <StyledAnswer>Correct </StyledAnswer>
                    <Image styles={{ height: "15px" }} url="https://cdn-icons-png.flaticon.com/128/4315/4315445.png" />
                </StyledAnswersContainer>
                :
                <StyledAnswersContainer>
                    <StyledAnswer>Incorrect </StyledAnswer>
                    <Image styles={{ height: "15px" }} url="https://cdn-icons-png.flaticon.com/128/7699/7699001.png" />
                </StyledAnswersContainer>)
            }
        </StyledAnswerResultWrapper>
    )
}

export default AnswerResult;