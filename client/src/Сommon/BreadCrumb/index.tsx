import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { compact } from 'lodash';
import { AiOutlineHome } from 'react-icons/ai'
import * as selectors from '../../store/selectors/index'
import { StyledBreadcrumb } from './styled';

const BreadCrumbPath = () => {
  const { path }: { path: string[] } = useSelector(selectors.tensesBCState);
  const { pathname } = useLocation();
  
  return (
      <StyledBreadcrumb>
        <AiOutlineHome size={20} />
        <p style={{ color: "darkgray", margin: "0 8px" }}>/</p>
        {path.length !== 0 ? [...path].reverse()?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        }) : (
          compact(pathname.split('/'))?.map((item: string, index: number) => {
            return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
          })
        )}
      </StyledBreadcrumb>
  );
};

export default BreadCrumbPath;
