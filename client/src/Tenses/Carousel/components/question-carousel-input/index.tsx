import React, { FormEvent, KeyboardEvent } from "react";
import { CarouselInput, FirstPart, SecondPart } from "../../styled";
import { ICarouselInput } from "../../types";

const QuestionCarouselInput = ({
  borderColor,
  showLastBanner,
  handleCheck,
  sentences,
  actualSentenceIndex,
  value,
  setValue,
}: ICarouselInput) => {
  return (
    <>
      <CarouselInput
        id='question-input'
        data-testid='question-input'
        style={{ border: borderColor ?? '1px solid white' }}
        disabled={showLastBanner}
        onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
          handleCheck(e, sentences?.[actualSentenceIndex].missed)
        }
        value={value}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />
      <FirstPart>{sentences?.[actualSentenceIndex]?.partOne}</FirstPart>{' '}
      <SecondPart>{sentences?.[actualSentenceIndex].partTwo}</SecondPart>
    </>
  );
};

export default QuestionCarouselInput;
