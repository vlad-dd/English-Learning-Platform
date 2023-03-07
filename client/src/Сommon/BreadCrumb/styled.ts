import styled from 'styled-components';
import { Breadcrumb } from 'antd';
import { DEVICE_MAXIMUM } from '../../mobile-view';

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0px;
  @media ${DEVICE_MAXIMUM.tablet} {
    font-size: 0.85rem;
  }
`;
