import React from "react";
import { ITitleProps } from "./types";
import { TITLE_COMPONENT_DATA_TEST_ID } from "./constants";
import { TitleContainer } from "./styled";

const Title: React.FC<ITitleProps> = ({ children, styles }) => {
  return (
    <TitleContainer data-testid={TITLE_COMPONENT_DATA_TEST_ID} style={styles}>
      {children}
    </TitleContainer>
  )
};

export default Title;

