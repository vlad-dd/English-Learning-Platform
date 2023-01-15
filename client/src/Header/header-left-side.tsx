import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderInput, HeaderLeft } from './styled';

const HeaderLeftSide = () => {
  return (
    <HeaderLeft>
      <SearchOutlined />
      <HeaderInput placeholder='Search for...' />
    </HeaderLeft>
  );
}

export default HeaderLeftSide;
