import React from 'react';
import { Title } from '../../../../Сommon';
import ExamplePanels from '../Panels/presentational';

const TenseExamplePanels = ({ configuration}: any) => {
  return (
    <>
     <Title>Examples</Title>
     <ExamplePanels response={configuration} />
    </>
  );
};

export default TenseExamplePanels;
