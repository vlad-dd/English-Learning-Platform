import React from 'react';
import MobileOptionsMenu from '../../Menu/mobile-menu/options-menu';
import SearchInput from './search-input';

const HeaderLeftSide = () => {
  return (
    <React.Fragment>
      <MobileOptionsMenu />
      <SearchInput />
    </React.Fragment>
  );
}

export default HeaderLeftSide;
