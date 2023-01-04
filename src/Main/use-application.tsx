import React from 'react';
import { useSelector } from 'react-redux';
import * as selectors from '../store/selectors';
import tenseDBRequest from '../databases/TensesDB';
import TenseContent from './Tenses/TenseContent/presentational';
import { SIDER_OPTIONS } from './constants';
import Releases from './Releases/presentationa';


const useApplication = () => {
    const { path } = useSelector(selectors.tensesBCState);
  
    const breadCrumbPath = path[0]?.toLowerCase();
   
    const config = {
      //tenseDBRequest takes the last element from path array
      [SIDER_OPTIONS.TENSES]: tenseDBRequest(path.at(-1))
    };
  
    const APPLICATIONS = {
      [SIDER_OPTIONS.TENSES]: <TenseContent configuration={config[breadCrumbPath]}/>,
      [SIDER_OPTIONS.GRAMMAR_LEVELS]: <div>Grammar Levels</div>,
      [SIDER_OPTIONS.DICTIONARY]: <div>Dictionary</div>,
      [SIDER_OPTIONS.RELEASES]: <Releases />,
    };

    return { application: APPLICATIONS[breadCrumbPath] }

}

export default useApplication;