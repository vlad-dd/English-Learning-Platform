import styled from 'styled-components';
import { DEVICE_MAXIMUM } from '../mobile-view';
import Autocomplete from '@mui/material/Autocomplete';

export const HeaderWrapper = styled.div`
  background: #001529;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

//PREVIOUS
// export const HeaderWrapper = styled.div`
//   background: #131e31;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 30px;
//   padding: 15px;
// `;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  @media ${DEVICE_MAXIMUM.tablet}{
    flex: 1;
    justify-content: flex-end;
  }
`;

export const UserEmail = styled.h4`
  color: whitesmoke;
  margin-left: 15px;
  margin-top: 5px;
  cursor: pointer;
`;

export const MenuItem = styled.span`
  margin-left: 10px;
`;

export const StyledAutoComplete = styled(Autocomplete)`
  background: white;
  border-radius: 30px;

  @media ${DEVICE_MAXIMUM.tablet} {
    display: none;
  }
`;




