import React, { useContext, useState } from "react";
import SelectInput from "./components/select";
import AnswerResult from "./components/result";
import {
  StyledFirstPart,
  StyledSecondPart,
  StyledSelectInputContainer,
  StyledSelectInputWrapper
} from "./styled";
import { TestContext } from "../../Context";
import { get } from "lodash";
export interface ISelectInput {
  id: number,
  firstPart: string,
  options: Array<{ value: string, label: string }>,
  secondPart: string,
  correctAnswer: string
}

const SelectInputQuiz = () => {
  const { data } = useContext(TestContext)!;
  const { config } = get(data, 'getTests[0]');
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number }>({});

  const handleChange = (value: string, correctAnswer: string, index: number) => {
    setSelectedOptions((prevOptions: { [key: number]: number } | undefined) => ({
      ...prevOptions,
      [index]: (value === correctAnswer) ? 1 : 0
    }))
  };

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