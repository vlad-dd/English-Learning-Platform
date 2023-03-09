import styled from 'styled-components';
import { DEVICE_MAXIMUM } from '../../mobile-view';

export const TitleContainer = styled.h2`
  font-size: 1.5rem;

  @media ${DEVICE_MAXIMUM.tablet} {
    font-size: 1.3rem;
  }

  @media ${DEVICE_MAXIMUM.mobileL} {
    font-size: 1.1rem;
  }

  @media ${DEVICE_MAXIMUM.mobileM} {
    font-size: 1rem;
  }

  @media ${DEVICE_MAXIMUM.mobileS} {
    font-size: 0.99rem;
  }
`;