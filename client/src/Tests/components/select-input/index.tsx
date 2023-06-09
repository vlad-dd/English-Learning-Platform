import SelectInput from "./components/select";
import AnswerResult from "./components/result";
import { useSelectInputWidget } from "./use-select-input-widget";
import { ISelectInput } from "../../types";
import {
  StyledFirstPart,
  StyledSecondPart,
  StyledSelectInputContainer,
  StyledSelectInputWrapper
} from "./styled";

const SelectInputQuiz = () => {

  const { config, selectedOptions, handleChange } = useSelectInputWidget();

  return (
    <StyledSelectInputWrapper>
      {config.map(({ id, firstPart, options, secondPart, correctAnswer }: ISelectInput, index: number) => {
        return (
          <StyledSelectInputContainer key={id}>
            <StyledFirstPart>{firstPart}</StyledFirstPart>
            <SelectInput
              index={index}
              correctAnswer={correctAnswer}
              options={options}
              selectedOptions={selectedOptions}
              handleChange={handleChange}
            />
            <StyledSecondPart>{secondPart}</StyledSecondPart>
            <AnswerResult
              index={index}
              selectedOptions={selectedOptions}
            />
          </StyledSelectInputContainer>
        )
      })}
    </StyledSelectInputWrapper>
  )
}

export default SelectInputQuiz;