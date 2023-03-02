import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderInput, HeaderLeft } from '../styled';
import MobileOptionsMenu from '../../Menu/mobile-menu/options-menu';

const HeaderLeftSide = () => {
  return (
    <React.Fragment>
      <MobileOptionsMenu />
      <HeaderLeft className='header-left-side' data-testid="header-left-side">
        <SearchOutlined />
        <HeaderInput data-testid="header-input" placeholder='Search for...' />
      </HeaderLeft>
    </React.Fragment>
  );
}

export default HeaderLeftSide;
