import styled from "styled-components";
import { Empty } from "antd";

export const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3vw 20vw;

  @media (max-width: 1090px) {
  flex-direction: column;
  gap: 5vw;
 }
`;

export const StyledEmptyAudioIcon = styled(Empty)`
  margin-top: 25px;
`;
