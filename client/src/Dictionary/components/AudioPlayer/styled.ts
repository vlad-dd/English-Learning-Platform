import styled from "styled-components";

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
