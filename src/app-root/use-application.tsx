import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../store/selectors';
import TenseContent from '../Tenses/Main/TenseContent/presentational';
import { SIDER_OPTIONS } from '../Tenses/constants';
import Releases from '../Releases/presentationa';


export const useApplication = (): { application: JSX.Element | null | undefined } => {
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