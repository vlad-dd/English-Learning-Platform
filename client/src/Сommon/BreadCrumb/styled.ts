import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { DEVICE_MAXIMUM } from '../../mobile-view';

export const StyledBreadcrumb = styled(Breadcrumb)`
  padding: 16px 16px;
  color: white;
  background: rgb(0, 30, 60);

  @media ${DEVICE_MAXIMUM.tablet} {
    font-size: 0.85rem;
  }

  @media ${DEVICE_MAXIMUM.mobileL} {
    font-size: 0.85rem;
  }

  @media ${DEVICE_MAXIMUM.mobileM} {
    font-size: 0.85rem;
  }

  @media ${DEVICE_MAXIMUM.mobileS} {
    font-size: 0.848rem;
  }

`;

//PREVIOUS
// margin: 16px 0px;
// color: white;
// background: rgb(0, 30, 60);