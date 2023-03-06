import styled from 'styled-components';
import { DEVICE_MAXIMUM } from '../../mobile-view';

export const TitleContainer = styled.h2`

@media (max-width: 900px) {
    font-size: 1.5rem;
  }
@media ${DEVICE_MAXIMUM.tablet} {
    font-size: 1.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;