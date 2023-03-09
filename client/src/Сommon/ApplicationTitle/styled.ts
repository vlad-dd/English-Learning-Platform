import styled from "styled-components";
import { DEVICE_MAXIMUM } from "../../mobile-view";

export const StyledApplicationTitle = styled.h1`
font-size: 2.5rem;

  @media ${DEVICE_MAXIMUM.tablet} {
    font-size: 1.7rem;
  };

  @media ${DEVICE_MAXIMUM.mobileL} {
    font-size: 1.67rem;
  }

  @media ${DEVICE_MAXIMUM.mobileM} {
    font-size: 1.66rem;
  }
`