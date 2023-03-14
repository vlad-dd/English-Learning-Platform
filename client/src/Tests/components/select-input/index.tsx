import React, { useState } from "react";
import SelectInput from "./components/select";
import AnswerResult from "./components/result";
import {
  StyledFirstPart,
  StyledSecondPart,
  StyledSelectInputContainer,
  StyledSelectInputWrapper
} from "./styled";

const data = [
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

export interface ISelectInput {
  id: number,
  firstPart: string,
  options: Array<{ value: string, label: string }>,
  secondPart: string,
  correctAnswer: string
}

const SelectInputQuiz = () => {

  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: boolean }>({});

  const handleChange = (value: string, correctAnswer: string, index: number) => {
    setSelectedOptions((prevOptions: { [key: number]: boolean } | undefined) => ({
      ...prevOptions,
      [index]: value === correctAnswer
    }))
  };

  return (
    <StyledSelectInputWrapper>
      {data.map(({ id, firstPart, options, secondPart, correctAnswer }: ISelectInput, index: number) => {
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