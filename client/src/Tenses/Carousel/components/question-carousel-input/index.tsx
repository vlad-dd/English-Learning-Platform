import React, { FormEvent } from "react";
import { CarouselInput, FirstPart, SecondPart } from "../../styled";

const QuestionCarouselInput = ({
  borderColor,
  showLastBanner,
  handleCheck,
  sentences,
  actualSentenceIndex,
  value,
  setValue,
}: any) => {
  return (
    <>
      <CarouselInput
        id='question-input'
        data-testid='question-input'
        style={{ border: borderColor }}
        disabled={showLastBanner}
        onKeyDown={(e: any) =>
          handleCheck(e, sentences?.[actualSentenceIndex].missed)
        }
        value={value}
        onChange={(e: FormEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />
      <FirstPart>{sentences?.[actualSentenceIndex].partOne}</FirstPart>{' '}
      <SecondPart>{sentences?.[actualSentenceIndex].partTwo}</SecondPart>
    </>
  );
};

export default QuestionCarouselInput;
