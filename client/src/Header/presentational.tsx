import React from 'react';
import { useTheme } from '../Hooks';
import { useAuthWidget } from './use-auth';
import HeaderLeftSide from './header-left-side';
import HeaderRightSide from './header-right-side';
import { HeaderWrapper } from './styled';

const Header = () => {
  
  const { themeInHex } = useTheme();

  const { enteredUser, handleSignOut } = useAuthWidget();

  return (
      <HeaderWrapper style={{ background: themeInHex }}>
        <HeaderLeftSide />
        <HeaderRightSide 
          enteredUser={enteredUser}
          handleSignOut={handleSignOut}
         />
      </HeaderWrapper>
  );
};

export default Header;
