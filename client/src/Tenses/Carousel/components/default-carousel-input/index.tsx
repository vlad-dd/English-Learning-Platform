import React, { KeyboardEvent } from "react";
import { CarouselInput, FirstPart, SecondPart } from "../../styled";
import { ICarouselInput } from "../../types";

const DefaultCarouselInput = ({
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
    <FirstPart>{sentences?.[actualSentenceIndex].partOne}</FirstPart>
    <CarouselInput
      id='practice-input'
      data-testid='practice-input'
      style={{ border: borderColor }}
      disabled={showLastBanner}
      onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
        handleCheck(e, sentences?.[actualSentenceIndex].missed)
      }
      value={value}
      onChange={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
    />
    <SecondPart>{sentences?.[actualSentenceIndex].partTwo}</SecondPart>
  </>
  );
};

export default DefaultCarouselInput;
