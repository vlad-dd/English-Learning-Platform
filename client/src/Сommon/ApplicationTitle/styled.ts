import styled from "styled-components";
import { DEVICE_MAXIMUM } from "../../mobile-view";

export const StyledApplicationTitle = styled.h1`
font-size: 2.5rem;

@media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media ${DEVICE_MAXIMUM.tablet} {
    font-size: 1.7rem;
  }
`