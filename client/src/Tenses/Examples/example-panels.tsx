import React from 'react';
import { Title } from '../../Сommon';
import ExamplePanels from '../Panels/presentational';
import { IExamplePanel } from '../types';
import { FormattedMessage } from 'react-intl';

const TenseExamplePanels = ({ examples }: { examples: IExamplePanel[] }) => {
  return (
    <>
      <Title styles={{ paddingTop: '25px' }}>
        <FormattedMessage id="tense_examples" />
      </Title>
      <ExamplePanels examples={examples} />
    </>
  );
};

export default TenseExamplePanels;
