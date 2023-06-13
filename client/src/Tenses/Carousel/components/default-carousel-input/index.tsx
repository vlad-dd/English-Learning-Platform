import { KeyboardEvent, FormEvent } from "react";
import { CarouselInput, FirstPart, SecondPart } from "../../styled";
import { ICarouselInput } from "../../../types";
import { DEFAULT_CAROUSEL_INPUT_DATA_TEST_ID } from "../../../constants";

const DefaultCarouselInput = ({
  borderColor,
  showLastBanner,
  value,
  currentItem,
  setValue,
  handleCheck,
}: ICarouselInput) => {
  return (
    <>
      <FirstPart>{currentItem.partOne}</FirstPart>
      <CarouselInput
        data-testid={DEFAULT_CAROUSEL_INPUT_DATA_TEST_ID}
        style={{ border: borderColor ?? '1px solid white' }}
        disabled={showLastBanner}
        onKeyDown={(e: KeyboardEvent<HTMLElement>) => handleCheck(e, currentItem.missed)}
        value={value}
        onChange={(e: FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
      />
      <SecondPart>{currentItem.partTwo}</SecondPart>
    </>
  );
};

export default DefaultCarouselInput;
