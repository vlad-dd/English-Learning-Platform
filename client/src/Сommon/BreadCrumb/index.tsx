import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { compact, size } from 'lodash';
import { AiOutlineHome } from 'react-icons/ai'
import * as selectors from '../../store/selectors/index'
import { IBreadcrumbPath } from './types';
import { StyledBreadcrumb, StyledSlash } from './styled';

const BreadCrumbPath = () => {
  const { path }: IBreadcrumbPath = useSelector(selectors.tensesBCState);
  const { pathname } = useLocation();

  const renderBreadCrumb = (item: string, index: number) => {
    return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
  };

  return (
    <StyledBreadcrumb>
      <AiOutlineHome size={20} />
      <StyledSlash>/</StyledSlash>
      {!!size(path) ? [...path].reverse()?.map(renderBreadCrumb) :
        compact(pathname.split('/'))?.map(renderBreadCrumb)
      }
    </StyledBreadcrumb>
  );
};

export default BreadCrumbPath;
