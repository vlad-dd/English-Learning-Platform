import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderInput, HeaderLeft } from '../styled';

const HeaderLeftSide = () => {
  return (
    <HeaderLeft data-testid="header-left-side">
      <SearchOutlined />
      <HeaderInput data-testid="header-input" placeholder='Search for...' />
    </HeaderLeft>
  );
}

export default HeaderLeftSide;
