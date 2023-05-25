import React from 'react';
import { useAuthWidget } from './use-auth';
import HeaderLeftSide from './header-left-side';
import HeaderRightSide from './header-right-side';
import { HeaderWrapper } from './styled';

const Header = () => {
  
  const { enteredUser, handleSignOut } = useAuthWidget();

  return (
      <HeaderWrapper>
        <HeaderLeftSide />
        <HeaderRightSide 
          enteredUser={enteredUser}
          handleSignOut={handleSignOut}
         />
      </HeaderWrapper>
  );
};

export default Header;
