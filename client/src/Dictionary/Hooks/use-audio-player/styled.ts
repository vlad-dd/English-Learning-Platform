import styled from "styled-components";
import { Card } from 'antd';
import { DEVICE_MAXIMUM } from "../../../mobile-view";

const { Meta } = Card;

export const StyledCard = styled(Card)`
  padding: 15px;

 @media ${DEVICE_MAXIMUM.tablet} {
    width: 50vw;
  }

  @media (max-width: 540px) {
    width: 53vw;
  }

  @media (max-width: 490px) {
    width: 53vw;
  }

 @media ${DEVICE_MAXIMUM.mobileL} {
    width: 80vw;
  }
`;

export const StyledMeta = styled(Meta)`

  @media ${DEVICE_MAXIMUM.tablet} {
    width: 44vw;
    position: relative;
    right: 3.1vw;
  }

  @media (max-width: 650px) {
    width: 43vw;
    position: relative;
    right: 4.7vw;
  }

  @media (max-width: 540px) {
    width: 48vw;
    position: relative;
    right: 5.8vw;
  }

  @media ${DEVICE_MAXIMUM.mobileL} {
    position: relative;
    right: 7.1vw;
    width: 70vw;
  }

  @media (max-width: 340px) {
    width: 70vw;
    position: relative;
    right: 9vw;
  }
`;

export const StyledAudio = styled.audio`

 @media ${DEVICE_MAXIMUM.tablet} {
  width: 43.6vw;
 }

 @media (max-width: 650px) {
    width: 43vw;
  }

  @media (max-width: 540px) {
    width: 48vw;
  }

 @media ${DEVICE_MAXIMUM.mobileL} {
    width: 70vw;
  }

  @media (max-width: 340px) {
    width: 70vw;
  }
`;

export const FlagImage = styled.img`
  width: 350px;

  @media ${DEVICE_MAXIMUM.tablet} {
    width: 47vw;
  }

  @media (max-width: 650px) {
    width: 47vw;
    position: relative;
    right: 1vw;
  }

  @media (max-width: 540px) {
    width: 50vw;
    position: relative;
    right: 1.5vw;
  }

  @media ${DEVICE_MAXIMUM.mobileL} {
    position: relative;
    right: 1.5vw;
    width: 73vw;
  }

  @media (max-width: 340px) {
    position: relative;
    right: 1.5vw;
    width: 70vw;
  }
`;