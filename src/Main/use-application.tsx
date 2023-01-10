import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../store/selectors';
import TenseContent from './Tenses/TenseContent/presentational';
import { SIDER_OPTIONS } from './constants';
import Releases from './Releases/presentationa';


const useApplication = () => {
    const { path } = useSelector(selectors.tensesBCState);
  
    const breadCrumbPath = path[0]?.toLowerCase();
     
    const APPLICATIONS = {
      [SIDER_OPTIONS.TENSES]: <TenseContent />,
      [SIDER_OPTIONS.GRAMMAR_LEVELS]: <div>Grammar Levels</div>,
      [SIDER_OPTIONS.DICTIONARY]: <div>Dictionary</div>,
      [SIDER_OPTIONS.RELEASES]: <Releases />,
    };

    return { application: APPLICATIONS[breadCrumbPath] };

}

export default useApplication;