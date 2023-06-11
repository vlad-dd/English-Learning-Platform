import styled from "styled-components";
import { Steps, Tag } from 'antd';

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
  background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`;

//PREVIOUS background-image: linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(191,192,193,1) 2%, rgba(0,215,255,1) 100%);

export const StyledSteps = styled(Steps)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 3vh;
`;

export const StyledClassifiedLevelContainer = styled.div`
  display: inline-block;
  padding-left: 25px;
`;

export const StyledClassifiedLevelTag = styled(Tag)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 10px;
`;

export const StyledLevel = styled.span`
  margin-right: 5px;
  color: gainsboro;
`;

export const StyledQuizContainer = styled.div``;

