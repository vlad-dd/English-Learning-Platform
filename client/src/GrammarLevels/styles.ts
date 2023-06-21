import styled from "styled-components";
import { DEVICE_MAXIMUM } from "../mobile-view";

export const GrammarLevelDescription = styled.div`
  background-color: #f0f2f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  font-family: inherit;
  font-size: 1rem;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const QuizWrapper = styled.div`
@media ${DEVICE_MAXIMUM.tablet} {
    display: flex;
    flex-wrap: wrap;
}
`;