import React from 'react';
import { Title } from '../../Сommon';
import ExamplePanels from '../Panels/presentational';

const TenseExamplePanels = ({ examples }: any) => {
  return (
    <>
     <Title styles={{ paddingTop: '25px' }}>Examples</Title>
     <ExamplePanels examples={examples} />
    </>
  );
};

export default TenseExamplePanels;
