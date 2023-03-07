import styled from "styled-components";
import { Card } from 'antd';
import { DEVICE_MAXIMUM } from "../../../mobile-view";

const { Meta } = Card;

export const StyledCard = styled(Card)`
  padding: 15px;

 @media ${DEVICE_MAXIMUM.tablet} {
    width: 50vw;
  }


 @media ${DEVICE_MAXIMUM.mobileL} {
    width: 80vw;
  }
`;

export const StyledMeta = styled(Meta)`
 @media ${DEVICE_MAXIMUM.mobileL} {
    width: 70vw;
  }

  @media ${DEVICE_MAXIMUM.tablet} {
    width: 40vw;
  }
`;

export const StyledAudio = styled.audio`
 @media ${DEVICE_MAXIMUM.mobileL} {
    width: 70vw;
  }

 @media ${DEVICE_MAXIMUM.tablet} {
  width: 40vw;
 }
`;

export const FlagImage = styled.img`
  width: 350px;

  @media ${DEVICE_MAXIMUM.tablet} {
    width: 47vw;
  }

  @media ${DEVICE_MAXIMUM.mobileL} {
    width: 80vw;
  }
`;