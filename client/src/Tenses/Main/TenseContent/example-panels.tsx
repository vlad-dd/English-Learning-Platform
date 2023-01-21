import React from 'react';
import { Title } from '../../../Сommon';
import ExamplePanels from '../Panels/presentational';

const TenseExamplePanels = ({ examples }: any) => {
  return (
    <>
     <Title>Examples</Title>
     <ExamplePanels examples={examples} />
    </>
  );
};

export default TenseExamplePanels;
