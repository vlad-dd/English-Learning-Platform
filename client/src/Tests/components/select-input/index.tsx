import React, { useState } from "react";
import SelectInput from "./components/select";
import AnswerResult from "./components/result";
import {
  StyledFirstPart,
  StyledSecondPart,
  StyledSelectInputContainer,
  StyledSelectInputWrapper
} from "./styled";

const props = [
  {
    id: 1,
    firstPart: 'She',
    options: [
      { value: 'Do', label: 'Do' },
      { value: 'Does', label: 'Does' },
    ],
    secondPart: 'her homework every day.',
    correctAnswer: 'Does'
  },
  {
    id: 2,
    firstPart: 'He',
    options: [
      { value: 'Do', label: 'Do' },
      { value: 'Doess', label: 'Doess' },
    ],
    secondPart: 'her homework every day.',
    correctAnswer: 'Doess'
  },
  {
    id: 3,
    firstPart: 'He',
    options: [
      { value: 'Do', label: 'Do' },
      { value: 'Doess', label: 'Doess' },
    ],
    secondPart: 'her homework every day.',
    correctAnswer: 'Doess'
  },
  {
    id: 4,
    firstPart: 'He',
    options: [
      { value: 'Do', label: 'Do' },
      { value: 'Doess', label: 'Doess' },
    ],
    secondPart: 'her homework every day.',
    correctAnswer: 'Doess'
  },
]

const SelectInputQuiz = () => {

  const [selectedOptions, setSelectedOptions] = useState<any>();

  const handleChange = (value: string, correctAnswer: string, index: number) => {
    setSelectedOptions((prevOptions: any) => ({
      ...prevOptions,
      [index]: value === correctAnswer
    }))
  };

  return (
    <StyledSelectInputWrapper>
      {props.map(({ id, firstPart, options, secondPart, correctAnswer }: any, index: number) => {
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