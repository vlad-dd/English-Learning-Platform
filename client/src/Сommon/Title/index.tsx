import React from "react";
import { TitleContainer } from "./styled";

interface IProps {
  children: React.ReactNode;
  styles?: {
    [key: string]: string;
  };
}

const Title: React.FC<IProps> = ({ children, styles }) => {
  return <TitleContainer data-testid="title-component-id" style={styles}>{children}</TitleContainer>;
};

export default Title;

{
  /* <TitleContainer style={{paddingTop: '25px'}}>{children}</TitleContainer> */
}
