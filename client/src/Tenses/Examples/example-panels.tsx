import React from 'react';
import { Title } from '../../Сommon';
import ExamplePanels from '../Panels/presentational';
import { IExamplePanel } from '../types';

const TenseExamplePanels = ({ examples }: { examples: IExamplePanel[] }) => {
  return (
    <>
     <Title styles={{ paddingTop: '25px' }}>Examples</Title>
     <ExamplePanels examples={examples} />
    </>
  );
};

export default TenseExamplePanels;
