import styled from "styled-components";
import { DEVICE_MAXIMUM } from "../../../mobile-view";

export const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3vw 30vw;

  @media (max-width: 1190px) {
  flex-direction: column;
  gap: 5vw;
 }


`;
//gap: 300px;
