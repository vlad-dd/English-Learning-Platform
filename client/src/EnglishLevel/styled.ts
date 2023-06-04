import styled from "styled-components";
import { Steps } from 'antd';

export const StyledEnglishLevelRootWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  overflow: auto;

  @media (max-width: 668px) {
    flex-wrap: wrap;
   }
`;

export const StyledTitle = styled.h1`
  font-size: 5rem;
  margin: 25px;
  background-image: linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(191,192,193,1) 2%, rgba(0,215,255,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`;

export const StyledSteps = styled(Steps)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 3vh;

`;