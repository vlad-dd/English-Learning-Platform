import styled from "styled-components";
import { Card } from 'antd';
import { DEVICE_MAXIMUM } from "../../../mobile-view";

const { Meta } = Card;

export const StyledCard = styled(Card)`
@media ${DEVICE_MAXIMUM.mobileL} {
    width: 80vw;
  }
`;

export const StyledMeta = styled(Meta)`
@media ${DEVICE_MAXIMUM.mobileL} {
    width: 70vw;
  }
`;

export const StyledAudio = styled.audio`
@media ${DEVICE_MAXIMUM.mobileL} {
    width: 70vw;
  }
`;

export const FlagImage = styled.img`
  width: 350px;
  @media ${DEVICE_MAXIMUM.mobileL} {
    width: 80vw;
  }
`;