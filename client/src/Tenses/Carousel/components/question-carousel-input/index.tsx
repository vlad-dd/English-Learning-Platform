import { FormEvent, KeyboardEvent } from "react";
import { CarouselInput, FirstPart, SecondPart } from "../../styled";
import { ICarouselInput } from "../../../types";
import { QUESTION_CAROUSEL_INPUT_DATA_TEST_ID } from "../../../constants";

const QuestionCarouselInput = ({
  borderColor,
  showLastBanner,
  currentItem,
  value,
  setValue,
  handleCheck,
}: ICarouselInput) => {
  return (
    <>
      <CarouselInput
        data-testid={QUESTION_CAROUSEL_INPUT_DATA_TEST_ID}
        style={{ border: borderColor ?? '1px solid white' }}
        disabled={showLastBanner}
        onKeyDown={(e: KeyboardEvent<HTMLElement>) => handleCheck(e, currentItem.missed)}
        value={value}
        onChange={(e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
      />
      <FirstPart>{currentItem.partOne}</FirstPart>{' '}
      <SecondPart>{currentItem.partTwo}</SecondPart>
    </>
  );
};

export default QuestionCarouselInput;
