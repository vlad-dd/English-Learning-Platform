import styled from 'styled-components';
import { Image, Select } from 'antd';
import { FiDatabase } from 'react-icons/fi';
import { DEVICE_MAXIMUM } from '../mobile-view';
import Autocomplete from '@mui/material/Autocomplete';
import { Menu } from 'antd';
import { Avatar } from '@mui/material';

export const HeaderWrapper = styled.div`
  background: #010a12;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
//PREVIOUS background: #001529;
// background: rgb(1, 14, 27);
// border-bottom: 0.1px solid whitesmoke;

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

export const StyledLanguageSelector = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
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
  width: 35vw;

  @media ${DEVICE_MAXIMUM.tablet} {
    display: none;
  }
`;

export const StyledAccountOptionsMenu = styled(Menu)`
  cursor: pointer;
`;

export const StyledSelect = styled(Select)`
  width: 70px;
  margin-right: 15px;
`;

export const StyledLanguageOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLanguageIcon = styled.img`
  height: 14px;
  width: 20px;
`;

export const StyledDatabaseIcon = styled(FiDatabase)`
  cursor: pointer;
  margin-right: 30px;
  font-size: 1.2rem;
`;

export const StyledUserAvatar = styled(Avatar)`
  object-fit: cover;
`;