import { Avatar } from "@mui/material";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 5rem;
  background: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`;

export const StyledUserFeedbackAvatar = styled(Avatar)`
  border: 1px solid white;
`;

// background-image: linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(191,192,193,1) 2%, rgba(0,215,255,1) 100%);
//PREVIOIS
// export const StyledTitle = styled.h1`
//   font-size: 5rem;
//   background-image: linear-gradient(254deg, rgba(2,0,36,1) 0%, rgba(191,192,193,1) 2%, rgba(0,215,255,1) 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent; 
// `;

